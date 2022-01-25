from django.db import models

from django.contrib.auth.models import User
from companies.models import Company
#from schedule.models import Schedule

class AccessPoint( models.Model ):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=50)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    location = models.FloatField(max_length=1000) #we are going to save coordinates like floating point numbers
    status = models.BooleanField(default=True)
    #schedules = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    
    REQUIRED_FIELDS = ['name', 'address', 'company', 'location']

    def __str__(self):
        return self.name

    class Meta:
        db_table='access-points'
