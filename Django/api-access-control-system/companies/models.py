from django.db import models
from django.contrib.auth.models import User

class Company( models.Model ):
    nit = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    commerceName = models.CharField(max_length=13)
    address = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    webSite = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    region = models.CharField(max_length=50)
    city = models.CharField(max_length=50)

    def __str__(self):
        return self.address

    class Meta:
        db_table='companies'
