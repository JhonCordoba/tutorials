from django.urls import include, path
from rest_framework import routers
from access_points.views import AccessPointViewSet

router = routers.DefaultRouter()
router.register(r'access-points', AccessPointViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]