from django.db import models

from fund.validators import *


CATEGORY_CHOICES = ((1, 'Personal'), (2, 'Education'), (3, 'Community'),
                    (4, 'Health & Medicine'), (5, 'Others'))
STATUS_CHOICES = ((1, 'Ongoing'), (2, 'Completed'), (3, 'Ended'))

class Project(models.Model):
    title = models.CharField(max_length=200)
    category = models.PositiveSmallIntegerField(choices=CATEGORY_CHOICES)
    description = models.TextField()
    date_created = models.DateField(auto_now=True)
    date_goal = models.DateField(validators=[validate_date_goal])
    date_finished = models.DateField(null=True, blank=True)
    status = models.PositiveSmallIntegerField(default=1, choices=STATUS_CHOICES)
    amount_funded = models.FloatField(default=0)
    amount_goal = models.FloatField(validators=[validate_amount_goal])
    creator_address = models.CharField(max_length=100, validators=[validate_creator_address])

    def __str__(self):
        return self.title
