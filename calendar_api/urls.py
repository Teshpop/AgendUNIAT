from django.urls import path, include
from .apiviews import CalendarList

urlpatterns = [
    path('calendar/', CalendarList.as_view(), name='calendar_list')
]
