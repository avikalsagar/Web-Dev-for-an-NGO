"""from django.urls import path
from . import views

urlpatterns = [
    
    path('',views.home,name='directory-home'), #this is the registration
    path ('post_registration/',views.post_reg, name='post_reg'), # this is shown after registering 
    path('signup/', views.signup_view, name="signup"), # this not used, but the signup.html file is used. 
    path('index/', views.indexview, name="all of it"), # shows the table with all registrations 

]
"""
from django.urls import path
from django.contrib import admin
from directory import views
urlpatterns = [
 
# Examples:
# url(r’^$’, ‘myproject.views.home’, name=’home’),
# url(r’^blog/’, include(‘blog.urls’)),
path('api/', views.reg_list),
 
]