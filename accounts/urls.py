rom django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^api-auth/',
        include('rest_framework.urls',
                namespace='rest_framework'))
    url(r'^updateprofile/', views.
        ),
]
