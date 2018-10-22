from django.db import models


CATEGORY_CHOICES = ((1, 'Personal'), (2, 'Education'), (3, 'Community'),
                    (4, 'Health & Medicine'), (5, 'Special Events'))
STATUS_CHOICES = ((1, 'Ongoing'), (2, 'Completed'), (3, 'Ended'))

class Project(models.Model):
    title = models.CharField(max_length=200)
    category = models.PositiveSmallIntegerField(choices=CATEGORY_CHOICES)
    description = models.TextField()
    date_created = models.DateField(auto_now=True)
    date_goal = models.DateField()
    date_finished = models.DateField(null=True, blank=True)
    status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES)
    amount_funded = models.FloatField(default=0)
    amount_goal = models.FloatField()
    creator_address = models.CharField(max_length=100)
