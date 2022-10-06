from django.db import models

# Create your models here.
class Questions(models.Model):
    question = models.CharField('Вопрос', max_length=250)

    class Meta:
        managed = True
        db_table = 'questions'

class Answers(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE, null=True)
    answer = models.CharField('Ответ', max_length=250)
    note = models.TextField(null=True)
    next_question = models.IntegerField(null = True)
    answer_final = models.CharField('Итоговый ответ', max_length=250, null=True)


    class Meta:
        managed = True
        db_table = 'answers'
