from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .models import Questions
from .serializers import QueSerializer


def bot_page(request):

    now_question =  Questions.objects.all()

    return render(request, 'bot/bot.html', {'now_question': now_question})

class QueViewSet(ModelViewSet):
    queryset = Questions.objects.all()
    serializer_class = QueSerializer