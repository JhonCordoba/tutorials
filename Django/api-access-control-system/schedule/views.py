from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes

from schedule.models import Schedule
from schedule.serializers import ScheduleSerializer
class ScheduleViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Schedule.objects.all().order_by('id')
    serializer_class = ScheduleSerializer
    permission_classes = [permissions.IsAuthenticated]

@api_view(['POST'])
def hasAccess(request):
     return Response("True", status = status.HTTP_200_OK)