from django.contrib.auth.models import User

from rest_framework import serializers

from .models import (
    Places,
    Review)


class PlacesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Places
        fields = [
            'Image',
            'name'
            'location'
            'stats'

        ]


class reviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = [
            'stars',
        ]
