from django.shortcuts import render

# Create your views here.
def hola(request):
    return render(request, "index.html", {})

def contact(request):
    return render(request, "contact.html", {})

def work(request):
    return render(request, "work.html", {})

def about(request):
    return render(request, "about.html", {})