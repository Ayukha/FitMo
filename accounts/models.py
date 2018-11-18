# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.


class Profile(models.Model):
    """
    Model to store profile of a user
    """
    user = models.OneToOneField(User)
    xp = models.IntegerField(default=0, blank=False, null=True)
    level = models.IntegerField(max_length=99)
    location = models.IntegerField(default=0)
    followers = models.IntegerField(default=0)
    following = models.IntegerField(default=0)

    def __str__(self):
        return '{}'.format(self.user)

    class Meta:
        app_label = 'accounts'


# @receiver(post_save, sender=User)
# def create_or_update_user_profile(sender, instance, created, **kwargs):
#     if created:
#         Profile.objects.create(user=instance)
#     instance.profile.save()
