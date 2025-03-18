from django.contrib import admin
from .models import Calendar

# Register your models here.
class CalendarAdmin(admin.ModelAdmin):
    list_display = ['name', 'career', 'dayAppointment']

admin.site.register(Calendar, CalendarAdmin)
