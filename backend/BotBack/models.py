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
    Link=models.TextField(blank=True) 
    SecondText=models.TextField(blank=True)                     # Текст примечания к варианту ответа(примечания к 
                                                                # итоговым ответам выводятся в них же)

#Сферы деятельностей
class Types(models.Model):
    text=models.TextField(blank=False)                          
#Пункты
class Items(models.Model):
    text=models.TextField(blank=True)
    FinalAnswer=models.TextField(blank=True)                          
    T_id=models.ForeignKey(Types,on_delete = models.CASCADE)    
    Next_Quest=models.PositiveIntegerField(null=True,blank=True)                   
    SecondText=models.TextField(blank=True)
    Link=models.TextField(blank=True)


class FAQ_Types(models.Model):
    text= models.TextField(blank=False)   

class FAQ_Q_A(models.Model):
    Qtext=models.TextField(blank=True)   
    Atext=models.TextField(blank=True)                 
    T_id=models.ForeignKey(FAQ_Types,on_delete = models.CASCADE)
    Link=models.TextField(blank=True)

class FAQ_Priv_Types(models.Model):
    text= models.TextField(blank=False)   

class FAQ_Priv_Q_A(models.Model):
    Qtext=models.TextField(blank=True)   
    Atext=models.TextField(blank=True)                 
    T_id=models.ForeignKey(FAQ_Priv_Types,on_delete = models.CASCADE)
    Link=models.TextField(blank=True)    
                         