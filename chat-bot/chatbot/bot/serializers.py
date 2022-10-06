from rest_framework.serializers import ModelSerializer

from .models import Questions, Answers


class QueSerializer(ModelSerializer):
    class Meta:
        model = Questions
        fields = ['question']

class AnsSerializer(ModelSerializer):
    class Meta:
        model = Answers
        fields = ['answer_final']

class AnsQueSerializer(ModelSerializer):
    question = QueSerializer(read_only=True)

    class Meta:
        model = Answers
        fields = ['answer', 'note', 'question']