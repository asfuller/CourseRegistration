from django.db import models

# Create your models here.
#Creating a Database Model
class Student(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  email = models.CharField(max_length=150)
  classrank = models.CharField(max_length=25)