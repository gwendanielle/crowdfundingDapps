from datetime import datetime

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from fund.models import Project
from fund.serializers import ProjectSerializer


class ProjectDetailAPIView(APIView):
    """APIView to fund and retrieve Project instance's details.

    URL Parameters:
    project -- ID of Project instance

    GET:
    Return details of specific Project

    POST:
    Fund a specific Project
        amount <float> - Amount to be funded in ETH
    """
    def get(self, request):
        project = request.GET.get('project')

        try:
            project = Project.objects.get(pk=project)
        except Project.DoesNotExist as e:
            return Response({'details': 'Project does not exist'}, status=404)

        now = datetime.now().date()
        gap_from_date_goal = now - project.date_goal
        project_completed = project.amount_funded >= project.amount_goal
        if not project_completed and gap_from_date_goal.total_seconds() == 0:
            project.status = 3
            project.save()

        serialized_project = ProjectSerializer(project)
        return Response(serialized_project.data, status=200)

    def post(self, request):
        project = request.GET.get('project')

        try:
            project = Project.objects.get(pk=project, status=1)
        except Project.DoesNotExist as e:
            return Response({'details': 'Project does not exist or is already complete'}, status=404)

        amount_funded = request.data.get('amount')

        try:
            amount_funded = float(amount_funded)
            if amount_funded <= 0:
                return Response({'details': 'Funded amount should be greater than 0'}, status=400)
        except ValueError as e:
            return Response({'details': 'Funded amount is not a valid value'}, status=400)

        project.amount_funded = project.amount_funded + amount_funded
        if project.amount_funded >= project.amount_goal:
            project.amount_funded = project.amount_goal
            project.status = 2
            project.date_finished = datetime.now()

        project.save()
        return Response({'details': 'Success'}, status=200)


class ProjectListAPIView(APIView):
    """APIView to view all Projects, and create Project instances.

    GET:
    Return all existing Project's details

    POST:
    Creates a Project instance, then returns it
        title <string> - Project's title*
        category <int> - Project's category (choices in fund/models.py)*
        description <string> - Extensive description about Project*
        date_goal <string> - "YYYY-MM-DD" format, Project deadline*
        amount_goal <float> - Amount needed to be funded in ETH*
        creator_address <string> - Project creator's wallet address (hash)*
    """
    def get(self, request):
        projects = Project.objects.all()
        serialized_projects = ProjectSerializer(projects, many=True)
        return Response(serialized_projects.data, status=200)

    def post(self, request):
        project_data = request.data
        serialized_project = ProjectSerializer(data=project_data)
        if serialized_project.is_valid(raise_exception=True):
            serialized_project.save()

        return Response(serialized_project.data, status=200)
