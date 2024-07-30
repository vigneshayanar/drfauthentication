from django.contrib import admin
from app1.models import User,profile
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display=['username','email']

class ProfileAdmin(admin.ModelAdmin):
    list_editable=['verified']
    list_display=['user','Full_name','verified']

admin.site.register(User,UserAdmin)
admin.site.register(profile,ProfileAdmin)