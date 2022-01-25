# execute

 -  pip install -r requirements.txt #(you can do it under your own enviroment)
 -  python3 manage.py makemigrations access_points companies profiles schedule
 -  python3 manage.py migrate
 -  python3 manage.py runserver


# To test the API:
You can use the API browsable or programas like postman or insomnia. We prefer the API browsable,
to test with postman you have to:

1) in the file access_control_project/urls.py, remove the comment from line:
path('api-token-auth/', authView.obtain_auth_token, name='api-token-auth')
and comment the line:
path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

2) in the file access_control_project/settings remove the comments of:
    # 'DEFAULT_AUTHENTICATION_CLASSES': ( #to test with postman
    #            'rest_framework.authentication.TokenAuthentication',
    # ),

# The work flow:

- 1) The first thing that you have to do is create the superuser:
- python manage.py createsuperuser --email YOUREMAIL@_.com --username admin

With the super user created, you can enter to the browsable API and make tests.
Enter to localhost:8000/ and login with the userName (admin) and your password (1234).

- 2) Create an user, this new user is a company admin. localhost:8000/users
IMPORTANT: when you create an user, the systen send an email to the new user with his user and password.
With his user and password he can get a token to consume the API. To get the token you have to POST
this endpoint (with the user and password): http://localhost:8000/api-token-auth/

- 3) with the token that the adminCompany got, he can update his personal and company information.

- 4) The adminCompany has to create access points (or branches) of his company

- 5) The adminCompany has to create schedules

- 6) the adminCompany create employees, each employee has  branches and schedules

7) when the employer create a employee, the employee gets a email with his user and password,
so, he can get a token to update his personal information

8) the employee can consume the enpoint that receives a id branch and a hour, and returns True if the employee
can come in, else return False.

# execute with docker
install docker --- https://docs.docker.com/compose/install/

sudo su

docker-compose run web python3 manage.py  makemigrations access_points companies profiles schedule
docker-compose run web python3 manage.py  migrate

docker-composer build 

docker-composer up
