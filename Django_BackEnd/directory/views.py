#from django.shortcuts import render
from django.http import HttpResponse
#from .models import Registration
# handle traffic from homepage 
from django.shortcuts import render
from django.contrib.auth import login, authenticate
#from django.contrib.auth.forms import UserCreationForm
from .forms import SignUpForm
from django.shortcuts import render, redirect
from .models import RegistrationForm, Registration

def home(request):
    #context = {
    #    'registration': Registration.objects.all()
    #}
    #return render(request,'directory/home.html',context)
    #return HttpResponse('<h1>Directory Home Page </h1>')
    context={}
    form=RegistrationForm(request.POST or None)
    if form.is_valid():
        form.save()
        return HttpResponse("you've registered")
    context['form']=form  
    return render(request,"directory/signup.html",context)
    #return render(request, 'directory/home.html',{'name':'Jeff'})

def indexview(request):
    registration_qs = Registration.objects.all()
    return render(request,'directory/index.html',{'registration_qs':registration_qs})

def post_reg(request):
    #return render(request,'directory/about.html',{'title':'About'})
    return HttpResponse("you've registered")

# this not needed but kept anyway
def signup_view(request):
    form = SignUpForm(request.POST)
    if form.is_valid():
        form.save()
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        login(request, user)
        messages.success(request, 'Account created successfully')
        return redirect('home')
    else:
        form=SignUpForm()
    return render(request, 'directory/signup.html', {'form': form})