
from django.db import models

# Create your models here.
class Menu_list(models.Model):
    food_name = models.CharField(max_length=100, unique=True)
    food_image = models.ImageField(upload_to='food_basket')
    price = models.CharField(max_length=200)
    description = models.TextField(max_length=100, unique=False)
    
    class Meta:
        verbose_name = 'Menu'
        verbose_name_plural = 'Menu'
        
    
    def __str__(self):
        return self.food_name
