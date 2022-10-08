from django.db import models

# БД sqlite(но неважно какая бд, работа идет через модели)
# Модели
class Questions(models.Model):
    text=models.TextField(blank=False)                          # Текст вопроса

class Answers(models.Model):
    text=models.TextField(blank=False)                          # Текст ответа
    Q_id=models.ForeignKey(Questions,on_delete = models.CASCADE)# Внешний ключ на таблицу вопросов
    Next_Quest=models.PositiveIntegerField(null=True,blank=True)# Номер следующего вопроса
    FinalAnswer=models.TextField(blank=True)                    # Текст финального ответа
    SecondText=models.TextField(blank=True)                     # Текст примечания к варианту ответа(примечания к 
                                                                # итоговым ответам выводятся в них же)

