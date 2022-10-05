from rest_framework import serializers

from .models import Answers, Questions

class QuestionsSerializer(serializers.ModelSerializer):
     class Meta:
        model = Questions
        fields = '__all__'

class AnswersSerializer(serializers.ModelSerializer):
     class Meta:
        model = Answers
        fields = '__all__'