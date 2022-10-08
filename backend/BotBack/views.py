from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Questions,Answers
from .serializers import QuestionsSerializer,AnswersSerializer

# API для запроса, получаем по моделям данные
class AnswerApi(APIView):
    def post(self,request):
        question=Questions.objects.get(pk=request.data['Q_id'])
        answer=Answers.objects.all().filter(Q_id=request.data['Q_id'])
        return Response({'post':{'quest':QuestionsSerializer(question).data,'answers':AnswersSerializer(answer, many=True).data}})

# Необходимо прописать json для обработки ошибок(400-ые 500-ые и т.п.) Django уже делает такие json(насколько я помню), их надо только отправлять пользователю