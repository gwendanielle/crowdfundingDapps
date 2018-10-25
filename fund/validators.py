from datetime import datetime

from django.core.exceptions import ValidationError

from fund.models import Project


def validate_date_goal(value):
    """Validate date_goal to be later than current day"""
    now = datetime.now().date()
    if value and (value - now).days < 1:
        raise ValidationError('Goal date should be at least 1 day from now')


def validate_amount_goal(value):
    """Validate amount_goal to be greater than 0"""
    if not value or value < 0:
        raise ValidationError('Goal amount should be greater than 0')


def validate_creator_address(value):
    """Validate creator_address to not have another project"""
    projects_by_creator_address = Project.objects.filter(creator_address=value, status=1)
    if projects_by_creator_address.exists():
        raise ValidationError('Each address can only have one fundraising project at a time')
