# Generated by Django 4.1.1 on 2022-10-06 11:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bot', '0017_answers_answer_final'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answers',
            name='answer_final',
            field=models.CharField(max_length=250, null=True, verbose_name='Итоговый ответ'),
        ),
    ]