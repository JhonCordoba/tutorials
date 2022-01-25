from django.urls import include, path
from rest_framework import routers
from companies.views import CompanyViewSet

router = routers.DefaultRouter()
router.register(r'companies', CompanyViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]