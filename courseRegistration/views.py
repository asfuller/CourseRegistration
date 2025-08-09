from django.shortcuts import render, HttpResponse
from django.template import loader

# Create your views here.
def home(request):
    template = loader.get_template("home.html")
    return HttpResponse(template.render())

def login(request):
    template = loader.get_template("login.html")
    return HttpResponse(template.render())

def signup(request):
    template = loader.get_template("signup.html")
    return HttpResponse(template.render())