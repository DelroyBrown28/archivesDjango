from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm



class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    # keeps configurations in once place
    class Meta:
        # specifies the form to be interacted with
        model = User
        fields = ['username', 'email', 'password1', 'password2']
