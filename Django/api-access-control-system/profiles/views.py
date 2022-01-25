import json

from django.contrib.auth.models import User
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view, permission_classes

from helpers.email import send_notification

from profiles.models import Profile
from companies.models import Company
from profiles.serializers import ProfileSerializer, UserSerializer, ProfileUpdateSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.set_password(serializer.data['password'])
            user.save()
            send_notification(serializer.data['email'], "Han creado tu cuenta!", "Tu usuario es: " + serializer.data['username'] + " y tu contraseña: " + serializer.data['password'] )
            company = Company(nit = '')
            company.save()
            profile = Profile(user = user, company = company, address = '', phoneNumber = '', country = '', region = '', city = '')
            profile.save()

            return Response(serializer.data, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users profile to be viewed or edited.
    """
    queryset = Profile.objects.all().order_by('id')
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self): 
        if self.action == 'update':
            return ProfileUpdateSerializer
        return ProfileSerializer
       


    def partial_update(self, request, pk, **kwargs):

        username = request.user
        user = User.objects.get(username = username)
        profile = Profile.objects.get(user = user)

        if( not( user.is_superuser ) or str( profile.id ) != pk ):
            return Response("You are not the profile owner man!", status = status.HTTP_403_FORBIDDEN)

        serializer = self.serialize(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data, status = status.HTTP_200_OK)
