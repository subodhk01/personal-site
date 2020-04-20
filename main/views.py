from django.shortcuts import render
from .models import *

def index(request):
    subodh = Info.objects.get(pk=1)
    socials = Social.objects.all()
    context = {
        'subodh':subodh,
        'socials':socials
    }
    return render(request, 'index.html', context)
