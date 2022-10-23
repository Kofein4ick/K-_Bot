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

#Тип договора
class Types(models.Model):
    text=models.TextField(blank=False)    # Название типа
                          
#Пункты
class Items(models.Model):
    text=models.TextField(blank=True) # Название
    FinalAnswer=models.TextField(blank=True)# итоговый ответ                          
    T_id=models.ForeignKey(Types,on_delete = models.CASCADE)# Внешний ключ на таблицу Types 
    Next_Quest=models.PositiveIntegerField(null=True,blank=True)# Следующий пункт ветки                   
    SecondText=models.TextField(blank=True)# Примечение
    Link=models.TextField(blank=True)# Ссылки

#Выпадающий список договоров: заголовки
class FAQ_Types(models.Model):
    text= models.TextField(blank=False)# Название

#Выпадающий список договоров: ответы(список вложенный)
class FAQ_Q_A(models.Model):
    Qtext=models.TextField(blank=True)# Заголовок/вопрос списка   
    Atext=models.TextField(blank=True)# Ответ              
    T_id=models.ForeignKey(FAQ_Types,on_delete = models.CASCADE)# Внешний ключ на таблицу FAQ_Types 
    Link=models.TextField(blank=True)# Ссылки

#Выпадающий список привилегий: заголовки
class FAQ_Priv_Types(models.Model):
    text= models.TextField(blank=False) # Название  

#Выпадающий список привилегий: ответы(список вложенный)
class FAQ_Priv_Q_A(models.Model):
    Qtext=models.TextField(blank=True)# Заголовок/вопрос списка   
    Atext=models.TextField(blank=True)# Ответ                  
    T_id=models.ForeignKey(FAQ_Priv_Types,on_delete = models.CASCADE)# Внешний ключ на таблицу FAQ_Priv_Types 
    Link=models.TextField(blank=True)# Ссылки    

#Выпадающий список ответственности: ответы               
class FAQ_Resp_Q_A(models.Model):
    Qtext=models.TextField(blank=True)# Заголовок/вопрос списка   
    Atext=models.TextField(blank=True)# Ответ                 
    Link=models.TextField(blank=True)# Ссылки    

#Выпадающий список регистрации: ответы
class FAQ_Reg_Q_A(models.Model):
    Qtext=models.TextField(blank=True)# Заголовок/вопрос списка   
    Atext=models.TextField(blank=True)# Ответ                  
    Link=models.TextField(blank=True)# Ссылки    