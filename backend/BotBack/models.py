from django.db import models

# Create your models here.
class Questions(models.Model):
    text=models.TextField(blank=False)

class Answers(models.Model):
    text=models.TextField(blank=False)
    Q_id=models.ForeignKey(Questions,on_delete = models.CASCADE)
    Next_Quest=models.PositiveIntegerField(null=True,blank=True)
    FinalAnswer=models.TextField(blank=True)
    SecondText=models.TextField(blank=True)

