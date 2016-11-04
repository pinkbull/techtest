from django import forms
from users.models import User

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = [
        	'first_name', 'last_name', 'email', 'birthday', 'random_number'
        ]
        widgets = {
        	'first_name': forms.TextInput(
        		attrs={
        			"class":	"form-control",
        		}),
        	'last_name': forms.TextInput(
        		attrs={
        			"class":	"form-control",
        		}),
        	'email': forms.EmailInput(
        		attrs={
        			"class":	"form-control",
        		}),
        	'birthday': forms.DateInput(
        		attrs={
        			"class":	"form-control",
        		}),
        	'random_number': forms.TextInput(
        		attrs={
        			"class":	"form-control",
        		}),
        }