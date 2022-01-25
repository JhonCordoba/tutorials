from django.urls import include, path
from rest_framework import routers
from profiles.views import ProfileViewSet

router = routers.DefaultRouter()
router.register(r'profiles', ProfileViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]