from rest_framework import serializers
from django.db import models
from .models import  Answers, FAQ_Types, FAQ_Q_A,Items, Questions, Types,FAQ_Resp_Q_A

# Сериалайзеры готовые, для работы с моделями
class QuestionsSerializer(serializers.ModelSerializer):
     class Meta:
        model = Questions
        fields = '__all__'

class AnswersSerializer(serializers.ModelSerializer):
     class Meta:
        model = Answers
        fields = ('id','text','Next_Quest','FinalAnswer','SecondText','Link')

class TypesSerializer(serializers.ModelSerializer):
     class Meta:
        model = Types
        fields = '__all__'

class ItemsSerializer(serializers.ModelSerializer):
     class Meta:
        model = Items
        fields = ('id','text','Next_Quest','SecondText','FinalAnswer','Link')

class FAQ_TypesSerializer(serializers.ModelSerializer):
     class Meta:
        model = FAQ_Types
        fields = '__all__'

class FAQ_Q_ASerializer(serializers.ModelSerializer):
     class Meta:
        model = FAQ_Q_A
        fields = '__all__'

class FAQ_Resp_Q_ASerializer(serializers.ModelSerializer):
     class Meta:
        model = FAQ_Resp_Q_A
        fields = '__all__'