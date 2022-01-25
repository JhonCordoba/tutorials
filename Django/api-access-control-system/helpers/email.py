from django.conf import settings
from django.core.mail import send_mail

def send_notification(to, title, content):
    print("HERES")
    send_mail(
        title, 
        content, 
        settings.EMAIL_HOST_USER,
        [to + ""],
        fail_silently=False
        )

#https://learntutorials.net/es/django-rest-framework/topic/9087/autenticacion-de-tokens-con-django-rest-framework
#create toke
from rest_framework.authtoken.models import Token
def createToken(user):
    token = Token.objects.create(user) #objeto a encapsular User=user
    return token.key

#get Token or valiadte

from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework import exceptions
def ValidateToken(token):
    try:
        user = User.objects.get(username=token)
    except User.DoesNotExist:
        raise exceptions.AuthenticationFailed('No such user')
#https://runebook.dev/es/docs/django_rest_framework/api-guide/authentication/index
