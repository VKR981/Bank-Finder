from rest_framework.routers import DefaultRouter
from .views import AutoCompleteAPIView,SearchAPIView
from django.urls import path, include

from .serializers import BankSerializer
from .models import banks



urlpatterns = [

    path("branches", SearchAPIView.as_view(),name='bank_search'),
    path("branches/autocomplete", AutoCompleteAPIView.as_view(),name='branch_autocomplete'),
    


]