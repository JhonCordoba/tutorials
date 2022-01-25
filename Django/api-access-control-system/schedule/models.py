from django.db import models
from django.contrib.auth.models import User

from access_points.models import AccessPoint
class Schedule( models.Model ):
    accessPoint = models.ForeignKey(AccessPoint, on_delete=models.CASCADE)

    startTime = models.TimeField( ['%H:%M',] )
    finalTime = models.TimeField( ['%H:%M',] )

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table='schedules'
