from django.db import models

# Create your models here.
class Questions(models.Model):
    question = models.CharField('Вопрос', max_length=250)

    class Meta:
        managed = True
        db_table = 'questions'

class Answers(models.Model):
    question_id = models.IntegerField()
    answer = models.CharField('Вопрос', max_length=250)
    note = models.TextField()
    next_question = models.IntegerField()


    class Meta:
        managed = True
        db_table = 'answers'
