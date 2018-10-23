from rest_framework.serializers import ModelSerializer

from fund.models import Project


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('status', 'date_created', 'date_finished', 'amount_funded')
