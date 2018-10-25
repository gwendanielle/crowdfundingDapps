from datetime import datetime

from django.core.exceptions import ValidationError

from fund.models import Project


def validate_date_goal(value):
    now = datetime.now().date()
    if value and (value - now).days < 1:
        raise ValidationError('Goal date should be at least 1 day from now')


def validate_amount_goal(value):
    if not value or value < 0:
        raise ValidationError('Goal amount should be greater than 0')


def validate_creator_address(value):
    projects_by_creator_address = Project.objects.filter(creator_address=value, status=1)
    if projects_by_creator_address.exists():
        raise ValidationError('Each address can only have one fundraising project at a time')
