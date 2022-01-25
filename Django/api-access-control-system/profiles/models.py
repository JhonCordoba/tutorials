from django.db import models
from django.contrib.auth.models import User

from companies.models import Company

class Profile( models.Model ):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    company = models.OneToOneField(Company, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    phoneNumber = models.CharField(max_length=13)
    country = models.CharField(max_length=50)
    region = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    REQUIRED_FIELDS = ['phoneNumber', 'address', 'country', 'region', 'city', 'token']

    class Meta:
        db_table='profiles'