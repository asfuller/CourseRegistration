### This is the courseRegistration application ###
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"), #empty string path view is the homepage
    path("signup/", views.signup, name="signup"), #signup string path view is the signup page
    path("login/", views.login, name="login") #login string path view is the login page
]
