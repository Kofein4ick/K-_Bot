"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path

from BotBack.views import AnswerApi, BuySellDocsApi, MasterDocsApi, TypeApi,FAQ_Q_AApi,FAQ_Priv_Q_AApi,FAQ_Resp_Q_AApi,FAQ_Reg_Q_AApi,ProducionDopDocsApi,ImageApi,ProducionDocsApi,ReactAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/Answer/',AnswerApi.as_view()),# Путь для запроса
    path('api/Items/',TypeApi.as_view()),
    path('api/FAQ_Q_A/',FAQ_Q_AApi.as_view()),
    path('api/FAQ_Priv_Q_A/',FAQ_Priv_Q_AApi.as_view()),
    path('api/FAQ_Resp_Q_A/',FAQ_Resp_Q_AApi.as_view()),
    path('api/FAQ_Reg_Q_A/',FAQ_Reg_Q_AApi.as_view()),
    path('api/Docs/MasterDocs',MasterDocsApi.as_view()),
    path('api/Docs/BuySellDocs',BuySellDocsApi.as_view()),
    path('api/Docs/Production',ProducionDocsApi.as_view()),
    path('api/Docs/ProductionDop',ProducionDopDocsApi.as_view()),
    path('api/Image/Logo',ImageApi.as_view()),
   	#re_path(r'^',ReactAppView.as_view()),
]
