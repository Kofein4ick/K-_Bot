from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()
router.register(r'q', views.QueViewSet)

urlpatterns = [
    path('', views.bot_page, name='bot'),
]

urlpatterns += router.urls