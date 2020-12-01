from django.shortcuts import render
from django.core.mail import send_mail
from dbwebdev.settings import EMAIL_HOST_USER

from . import forms
# Create your views here.

def eindex(request):
    sub=forms.Sendemail()
    if request.method=='POST':
        sub = forms.Sendemail(request.POST)
        subject = 'Welcome to GoNGO'
        message = 'We are an organization acting as an umbrella for more than 50 NGOs. Our main motto is "Make the world a better place"'
        recepient = str(sub['Email'].value())
        send_mail(subject, 
            message, EMAIL_HOST_USER, [recepient], fail_silently = False)
        return render(request, 'sendemail/success.html', {'recepient': recepient})
    
    return render(request, 'sendemail/eindex.html', {'form':sub})
    
