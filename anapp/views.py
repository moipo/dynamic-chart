from django.shortcuts import render

# Create your views here.

def show_home(request, *args, **kwargs):
    context = {

    }
    return render(request, "homepage.html", context)
