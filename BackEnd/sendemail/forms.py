from django import forms
class Sendemail(forms.Form):
    Email = forms.EmailField()
    def __str__(self):
        return self.Email