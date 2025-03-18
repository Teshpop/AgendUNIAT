from rest_framework import generics 
from rest_framework.response import Response

from .models import Calendar
from .serializer import CalendarSerializer

class CalendarList(generics.ListCreateAPIView):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer