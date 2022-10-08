from rest_framework import serializers
from django.db import models
from .models import Answers, Questions

# Сериалайзеры готовые, для работы с моделями
class QuestionsSerializer(serializers.ModelSerializer):
     class Meta:
        model = Questions
        fields = '__all__'

class AnswersSerializer(serializers.ModelSerializer):
     class Meta:
        model = Answers
        fields = ('id','text','Next_Quest','FinalAnswer','SecondText')