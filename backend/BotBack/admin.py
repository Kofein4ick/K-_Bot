from django.contrib import admin

from .models import FAQ_Q_A, Answers, FAQ_Types, Items, Questions, Types,FAQ_Priv_Types,FAQ_Priv_Q_A,FAQ_Resp_Q_A,FAQ_Reg_Q_A

# Register your models here.
admin.site.register(Questions)
admin.site.register(Answers)
admin.site.register(Types)
admin.site.register(Items)
admin.site.register(FAQ_Q_A)
admin.site.register(FAQ_Types)
admin.site.register(FAQ_Priv_Types)
admin.site.register(FAQ_Priv_Q_A)
admin.site.register(FAQ_Resp_Q_A)
admin.site.register(FAQ_Reg_Q_A)