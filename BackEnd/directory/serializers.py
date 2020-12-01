from rest_framework import serializers
 
from .models import Registration
 
class RegSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = Registration
        
        fields = '__all__'
