from django.db import models

class Info(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    info = models.CharField(max_length=300)
    quote = models.CharField(max_length=300)

    def __str__(self):
        return str(self.id + ": " + self.name)

class Social(models.Model):
    name = models.CharField(max_length=30)
    image_url = models.CharField(max_length=200)

    def __str__(self):
        return str(self.name)

