from django.shortcuts import render
from rest_framework import viewsets
from .serializer import CalendarSerializer
from .models import Calendar

# Create your views here.
class CalendarView(viewsets.ModelViewSet):
    serializer_class = CalendarSerializer
    queryset = Calendar.objects.all()
