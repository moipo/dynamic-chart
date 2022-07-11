from django.db import models

# Create your models here.

class Data(models.Model):
    #time = models.DecimalField(max_digits=19, decimal_places=10) # ? Не зватает места для Unix time
    #par1 = models.DecimalField( null = True, blank = True, max_digits = 10, decimal_places = 10)
    #par2 = models.DecimalField( null = True, blank = True, max_digits = 10, decimal_places = 10)
    #par3 = models.DecimalField( null = True, blank = True, max_digits = 10, decimal_places = 10)
    #par4 = models.DecimalField( null = True, blank = True, max_digits = 10, decimal_places = 10)
    #par5 = models.DecimalField( null = True, blank = True, max_digits = 10, decimal_places = 10)

    #par1 = models.DecimalField(decimal_places = 2, max_digits=10000, default = True)
    #par2 = models.DecimalField(decimal_places = 2, max_digits=10000, default = True)
    #par3 = models.DecimalField(decimal_places = 2, max_digits=10000, default = True)
    #par4 = models.DecimalField(decimal_places = 2, max_digits=10000, default = True)
    #par5 = models.DecimalField(decimal_places = 2, max_digits=10000, default = True)

    par1 = models.FloatField( null = True, blank = True)
    par2 = models.FloatField( null = True, blank = True)
    par3 = models.FloatField( null = True, blank = True)
    par4 = models.FloatField( null = True, blank = True)
    par5 = models.FloatField( null = True, blank = True)
