from django.db import models
from django.forms import ModelForm
from django.contrib.auth.models import User

   
class Registration(models.Model):
    NGO='NGO'
    OldAgeHome= 'Old Age Home'
    Orphanage = 'Orphanage'
    SocialInitiative = 'Social Initiative'
    Cate_choices=[
        (NGO, 'NGO'),
        (OldAgeHome, 'Old Age Home'),
        (Orphanage , 'Orphanage'),
        (SocialInitiative, 'Social Initiative'),
    ]
    name= models.CharField(max_length=50)
    location = models.CharField(max_length=50, default = "Mangalore")
    category = models.CharField(max_length=30, choices=Cate_choices, default=NGO)
    description = models.TextField(max_length=200, default = "Description")
    #author = models.ForeignKey(User, on_delete=models.CASCADE)
    donation_required = models.BooleanField(default=False)
    amt_needed=models.DecimalField(max_digits=7,default=0.00,decimal_places=2)
    amt_raised=models.DecimalField(max_digits=7,default=0.00,decimal_places=2)
    def __str__(self):
        return self.name

class RegistrationForm(ModelForm):
    class Meta:
        model=Registration
        fields=['name','location','category','description','donation_required','amt_needed','amt_raised']
    