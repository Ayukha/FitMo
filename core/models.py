# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Places(models.Model):
    """
    Model to store places nearby
    """
    Image = models.ImageField()
    name = models.characterField(blank=False, null=True)
    location = models.IntegerField(default=0)
    stats = models.IntegerField(max_length=99)
    review = models.ForeignKey(
        Review, on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.name, ondelete_CASCADE=true)

    class Meta:
        app_label = 'core'


class Review(models.Model):
    """
    Model to store review of places
    """
    stars = models.IntegerField(default=0)

    def __str__(self):
        return '{}'.format(self.stars, ondelete_CASCADE=true)

    class Meta:
        app_label = 'core'
