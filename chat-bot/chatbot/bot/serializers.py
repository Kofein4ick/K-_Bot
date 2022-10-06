from rest_framework.serializers import ModelSerializer

from .models import Questions, Answers


class QueSerializer(ModelSerializer):
    class Meta:
        model = Questions
        fields = ['question']

class AnsSerializer(ModelSerializer):
    class Meta:
        model = Answers
        fields = ['note']

class AnsQueSerializer(ModelSerializer):
    class Meta:
        model = Answers
        fields = ['note', 'question']