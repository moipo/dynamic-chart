from django.shortcuts import render
from .models import Data
import array
from django.http import JsonResponse


def show_home(request, *args, **kwargs):
    context = {}

    if (request.method=="POST"):
        pass
    else:
        Data.objects.create(par1 = request.POST.get("slv1"),
        par2 = request.POST.get("slv2"),
        par3 = request.POST.get("slv3"),
        par4 = request.POST.get("slv4"),
        par5 = request.POST.get("slv5"))

    logs = Data.objects.all()[len(Data.objects.all())-50:len(Data.objects.all())]
    logs = reversed(logs)

    var = request.POST
    context = {
        "par1_test" : var,
        "par1_db": Data.objects.get(id=(len(Data.objects.all()))).par2, 
        "logs" : logs,

    }
    return render(request, "homepage.html", context)



def get_data(request, *args, **kwargs):
    id_received = request.GET.get("received_id")
    obj = Data.objects.get(id = id_received)
    return JsonResponse({
    "p1" : obj.par1,
    "p2" : obj.par2,
    "p3" : obj.par3,
    "p4" : obj.par4,
    "p5" : obj.par5,
    })
