from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets,status, permissions

from access_points.models import AccessPoint
from access_points.serializers import AccessPointSerializer
class AccessPointViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = AccessPoint.objects.all().order_by('id')
    serializer_class = AccessPointSerializer
    update_serializer_class = AccessPointSerializer
    permission_classes = [permissions.IsAuthenticated]