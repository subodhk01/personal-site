from django.contrib import admin
from .models import *

@admin.register(Social)
class SocialAdmin(admin.ModelAdmin):
    list_display = ('name', 'image_url')

@admin.register(Info)
class InfoAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'info', 'quote')
