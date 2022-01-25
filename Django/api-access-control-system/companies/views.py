from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions

from companies.models import Company
from companies.serializers import CompanySerializer
from profiles.models import Profile

class CompanyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Company.objects.all().order_by('id')
    serializer_class = CompanySerializer
    permission_classes = [permissions.IsAuthenticated]

    def partial_update(self, request, pk, **kwargs):
        username = request.user
        user = User.objects.get(username = username)
        profile = Profile.objects.get(user = user)

        if( not( user.is_superuser ) or str( profile.company.id ) != pk ):
            return Response("You are not the company owner!", status = status.HTTP_403_FORBIDDEN)

        serializer = self.serialize(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data, status = status.HTTP_200_OK)