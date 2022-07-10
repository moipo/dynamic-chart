from django.urls import path #для использования urlpatters, в которой ищет django
from . import views #чтобы мочь связывать url с нашими представлениями приложения

urlpatterns = [
    path('', views.show_home, name = 'home'),
]
