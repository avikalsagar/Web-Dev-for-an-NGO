from django.urls import path
from . import views

urlpatterns = [
    
    path('',views.home,name='directory-home'), #this is the registration
    path ('post_registration/',views.post_reg, name='post_reg'), # this is shown after registering 
    path('signup/', views.signup_view, name="signup"), # this not used, but the signup.html file is used. 
    path('index/', views.indexview, name="all of it"), # shows the table with all registrations 

]