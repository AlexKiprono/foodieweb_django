from django.shortcuts import render
from menuapp.models import Menu_list

def index(request):
    menu = Menu_list.objects.all()
    return render(request, 'index.html', {'menu': menu})

def menu(request):
    menu = Menu_list.objects.all()
    return render(request, 'menu.html', {'menu': menu})

