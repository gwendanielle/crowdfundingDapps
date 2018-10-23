from datetime import datetime

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from fund.models import Project
from fund.serializers import ProjectSerializer


class ProjectDetailAPIView(APIView):
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
            project = Project.objects.get(pk=project)
        except Project.DoesNotExist as e:
            return Response({'details': 'Project does not exist'}, status=404)

        amount_funded = request.data.get('amount')

        try:
            amount_funded = float(amount_funded)
        except ValueError as e:
            return Response({'details': 'Funded amount is not a valid value'}, status=400)

        project.amount_funded = project.amount_funded + amount_funded
        if project.amount_funded >= project.amount_goal:
            project.status = 2
            project.date_finished = datetime.now()

        project.save()
        return Response({'details': 'Success'}, status=200)


class ProjectListAPIView(APIView):
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
