from django.contrib.auth.models import User
from rest_framework import serializers

from profiles.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['address', 'phoneNumber', 'country', 'region', 'city']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
