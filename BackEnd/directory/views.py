"""#from django.shortcuts import render
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
    #return render(request,"testingsignup.html",context)
    return render(request, 'directory/home.html',{'name':'Jeff'})

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

"""
from rest_framework import status,generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Registration
from .serializers import RegSerializer
"""
class reg_list(generics.ListCreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegSerializer"""

@api_view(['GET', 'POST'])

def reg_list(request):
    
    # List all snippets, or create a new snippet.
    if request.method == 'GET':
        regs = Registration.objects.all()
        serializer = RegSerializer(regs, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RegSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

