from django.views.generic import View
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import FileResponse,HttpResponse
from django.conf import settings
import os

from backend.settings import BASE_DIR 
from .const import PATH_TO_DOCS

from .models import Answers, Items, Questions, FAQ_Types, FAQ_Q_A,FAQ_Priv_Q_A,FAQ_Resp_Q_A,FAQ_Reg_Q_A
from .serializers import QuestionsSerializer,AnswersSerializer,ItemsSerializer,FAQ_TypesSerializer,FAQ_Q_ASerializer,FAQ_Resp_Q_ASerializer

# API для запроса, получаем по моделям данные

# Представление для запроса теста
class AnswerApi(APIView):
    def post(self,request):
        question=Questions.objects.get(pk=request.data['Q_id'])
        answer=Answers.objects.all().filter(Q_id=request.data['Q_id'])
        return Response({'post':{'quest':QuestionsSerializer(question).data,'answers':AnswersSerializer(answer, many=True).data}})

# Представление для запроса выпадающего списка договоров
class FAQ_Q_AApi(APIView):
    def post(self,request):
        type=FAQ_Types.objects.get(pk=request.data['T_id'])
        q_a=FAQ_Q_A.objects.all().filter(T_id=request.data['T_id'])
        return Response({'post':{'type':FAQ_TypesSerializer(type).data,'q_a':FAQ_Q_ASerializer(q_a, many=True).data}})

# Представление для запроса выпадающего списка привелегий
class FAQ_Priv_Q_AApi(APIView):
    def get(self,request):
        q_a=FAQ_Priv_Q_A.objects.all()
        return Response({'post':{'q_a':FAQ_Q_ASerializer(q_a, many=True).data}})

# Представление для запроса выпадающего списка ответственности
class FAQ_Resp_Q_AApi(APIView):
    def get(self,request):
        q_a=FAQ_Resp_Q_A.objects.all()
        return Response({'post':{'q_a':FAQ_Resp_Q_ASerializer(q_a, many=True).data}})

# Представление для запроса выпадающего списка регистрации
class FAQ_Reg_Q_AApi(APIView):
    def get(self,request):
        q_a=FAQ_Reg_Q_A.objects.all()
        return Response({'post':{'q_a':FAQ_Resp_Q_ASerializer(q_a, many=True).data}})

# Представление для запроса веток договоров
class TypeApi(APIView):
    def post(self,request):
        items=Items.objects.get(pk=request.data['I_id'])
        return Response({'post':{'items':ItemsSerializer(items).data}})

# Представление для запроса договора мастер-класса
class MasterDocsApi(APIView):
    def get(self,request):
        return FileResponse(open(PATH_TO_DOCS/'DogovorMasterKlass.docx','rb'))

# Представление для запроса договора купли-продажи
class BuySellDocsApi(APIView):
    def get(self,request):
        return FileResponse(open(PATH_TO_DOCS/'DogovorProdazha.docx','rb'))

# Представление для запроса договора производства
class ProducionDocsApi(APIView):
    def get(self,request):
        return FileResponse(open(PATH_TO_DOCS/'DogovorIzgotovlenie.docx','rb'))

# Представление для запроса дополнения к договору производства
class ProducionDopDocsApi(APIView):
    def get(self,request):
        return FileResponse(open(PATH_TO_DOCS/'DopIzgotovlenie.docx','rb'))

# Представление для запроса логотипа
class ImageApi(APIView):
    def get(self,request):
        return FileResponse(open(PATH_TO_DOCS/'LogoStart.png','rb'))

# Представление для фронтэнда
class ReactAppView(View):
    def get(self, request):
        try:
            with open(BASE_DIR/'build'/'index.html','rb') as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                Сервер выключен
                """,
                status=501,
            )
