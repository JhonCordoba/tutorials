from email.mime import base
from posixpath import basename
from django.urls import include, path
from rest_framework import routers
from schedule.views import ScheduleViewSet, hasAccess

router = routers.DefaultRouter()
router.register(r'schedules', ScheduleViewSet, basename = "schedules")




# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]