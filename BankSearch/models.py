from django.db import models

# Create your models here.
class banks(models.Model):

    ifsc = models.CharField(max_length=11)
    bank_name = models.CharField(max_length=50)
    bank_id = models.IntegerField()
    branch = models.CharField(max_length=150)
    address = models.CharField(max_length=250)
    city=models.CharField(max_length=50)
    district=models.CharField(max_length=50)
    state=models.CharField(max_length=50)
