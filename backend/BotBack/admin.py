from django.contrib import admin

from .models import Answers, Questions

# Register your models here.
admin.site.register(Questions)
admin.site.register(Answers)
