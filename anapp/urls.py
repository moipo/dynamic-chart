from django.urls import path 
from . import views

urlpatterns = [
    path('', views.show_home, name = 'home'),
    path('get_data/', views.get_data, name = 'get_data'),
]
