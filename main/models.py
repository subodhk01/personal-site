from django.db import models

class Info(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length="20")
    info = models.CharField(max_length="300")
    quote = models.CharField(max_length="300")

class Social(models.Model):
    name = models.CharField(max_length="30")
    image_url = models.URLField(max_length=200)

