from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UserRegisterForm


# Register user
def register(request):
    if request.method == 'POST':
        # Creates form that has request data
        form = UserRegisterForm(request.POST)
        # Checks is form is valid
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(
                request, f'Your account has been created! You can now login.')
            return redirect('login')
    else:
        # Else create a blank form
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})


@login_required
def profile(request):
    return render(request, 'users/profile.html')
