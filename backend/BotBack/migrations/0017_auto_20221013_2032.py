# Generated by Django 3.2.15 on 2022-10-13 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BotBack', '0016_faq_q_a_faq_types'),
    ]

    operations = [
        migrations.RenameField(
            model_name='faq_q_a',
            old_name='text',
            new_name='Atext',
        ),
        migrations.AddField(
            model_name='faq_q_a',
            name='Qtext',
            field=models.TextField(blank=True),
        ),
    ]