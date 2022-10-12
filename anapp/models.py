from django.db import models

# Create your models here.

class Data(models.Model):
    par1 = models.FloatField( null = True, blank = True)
    par2 = models.FloatField( null = True, blank = True)
    par3 = models.FloatField( null = True, blank = True)
    par4 = models.FloatField( null = True, blank = True)
    par5 = models.FloatField( null = True, blank = True)
