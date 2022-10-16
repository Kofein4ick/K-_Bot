from typing import Type
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import FileResponse

from .const import PATH_TO_DOCS

from .models import Answers, Items, Questions, FAQ_Types, FAQ_Q_A,FAQ_Priv_Q_A,FAQ_Resp_Q_A,FAQ_Reg_Q_A
from .serializers import QuestionsSerializer,AnswersSerializer,ItemsSerializer,FAQ_TypesSerializer,FAQ_Q_ASerializer,FAQ_Resp_Q_ASerializer

# API для запроса, получаем по моделям данные
class AnswerApi(APIView):
    def post(self,request):
        question=Questions.objects.get(pk=request.data['Q_id'])
        answer=Answers.objects.all().filter(Q_id=request.data['Q_id'])
        return Response({'post':{'quest':QuestionsSerializer(question).data,'answers':AnswersSerializer(answer, many=True).data}})

class FAQ_Q_AApi(APIView):
    def post(self,request):
        type=FAQ_Types.objects.get(pk=request.data['T_id'])
        q_a=FAQ_Q_A.objects.all().filter(T_id=request.data['T_id'])
        return Response({'post':{'type':FAQ_TypesSerializer(type).data,'q_a':FAQ_Q_ASerializer(q_a, many=True).data}})

class FAQ_Priv_Q_AApi(APIView):
    def get(self,request):
        q_a=FAQ_Priv_Q_A.objects.all()
        return Response({'post':{'q_a':FAQ_Q_ASerializer(q_a, many=True).data}})

class FAQ_Resp_Q_AApi(APIView):
    def get(self,request):
        q_a=FAQ_Resp_Q_A.objects.all()
        return Response({'post':{'q_a':FAQ_Resp_Q_ASerializer(q_a, many=True).data}})

class FAQ_Reg_Q_AApi(APIView):
    def get(self,request):
        q_a=FAQ_Reg_Q_A.objects.all()
        return Response({'post':{'q_a':FAQ_Resp_Q_ASerializer(q_a, many=True).data}})

class TypeApi(APIView):
    def post(self,request):
        items=Items.objects.get(pk=request.data['I_id'])
        return Response({'post':{'items':ItemsSerializer(items).data}})

class MasterDocsApi(APIView):
    def get(self,request):
        return FileResponse(open(PATH_TO_DOCS+'Договор. Мастер-класс.docx','rb'))

class BuySellDocsApi(APIView):
    def get(self,request):
        return FileResponse(open(PATH_TO_DOCS+'Договор. Продажа вспомогательных материалов..docx','rb'))

class ImageApi(APIView):
    def get(self,request):
        return FileResponse(open(PATH_TO_DOCS+'Логотип Стартовая страница.png','rb'))
# Необходимо прописать json для обработки ошибок(400-ые 500-ые и т.п.) Django уже делает такие json(насколько я помню), их надо только отправлять пользователю