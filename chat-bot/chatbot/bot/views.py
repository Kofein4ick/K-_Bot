from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
import json

from .models import Questions, Answers
from .serializers import QueSerializer, AnsSerializer, AnsQueSerializer

#функция, которая возвращает номер следующего вопроса. На входе id ответа
def next_quest_num(id):
    answer = Answers.objects.all()
    for i in answer:
        if i.id == id:
            return i.next_question

#функция, которая возвращает строку таблицы Questions с нужным вопросом. На входе id следующего вопроса из Answers
def next_quest(id):
    question = Questions.objects.all()
    for i in question:
        if i.id == id:
            return i


#функция, которая возвращает строку таблицы Questions с нужным вопросом. На входе id ответа из Answers
def now_question(id):
    now_id = next_quest_num(id)
    now_quest = next_quest(now_id)
    return now_quest


def bot_page(request):

    return render(request, 'bot/bot.html', {'now_question': len(Answers.objects.filter(id = 6, note = None))})


class QueViewSet(ModelViewSet):
    answ_id = 4   #id ответа
    quest = now_question(answ_id)    #строка с вопросом из таблицы Questions
    if quest is None:
        queryset = Answers.objects.filter(id = answ_id)
        serializer_class = AnsSerializer
    else:
        queryset = Answers.objects.filter(question_id=quest.id)
        serializer_class = AnsQueSerializer

