from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Questions,Answers
from .serializers import QuestionsSerializer,AnswersSerializer

class AnswerApi(APIView):
    #def options(self, request, *args, **kwargs):
        #return super().options(request, *args, **kwargs)
    def post(self,request):
        question=Questions.objects.get(pk=request.data['Q_id'])
        answer=Answers.objects.all().filter(Q_id=request.data['Q_id'])
        return Response({'post':{'quest':QuestionsSerializer(question).data,'answers':AnswersSerializer(answer, many=True).data}})

class QuestionApi(APIView):
    def post(self,request):
        answer=Questions.objects.get(pk=request.data['Q_id'])
        return Response({'post':QuestionsSerializer(answer).data})
