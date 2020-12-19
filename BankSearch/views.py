from django.shortcuts import render
from rest_framework.generics import ListAPIView,ListCreateAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.filters import SearchFilter,OrderingFilter
from .serializers import BankSerializer
from .models import banks

# Create your views here.

def index(request):
    return render(request, 'index.html')

    
class CustomPagination(LimitOffsetPagination):
    default_limit=10
    max_limit = 20

class CustomSearch(SearchFilter):
    search_param='q'
    
class AutoCompleteAPIView(ListAPIView):
    queryset=banks.objects.all()
    serializer_class=BankSerializer
    pagination_class=CustomPagination
    filter_backends=(CustomSearch,OrderingFilter)
    search_fields=('branch',)  # don't miss the comma
    ordering = ['ifsc']

class SearchAPIView(ListAPIView):
    queryset=banks.objects.all()
    serializer_class=BankSerializer
    pagination_class=CustomPagination
    filter_backends=(CustomSearch,OrderingFilter)
    search_fields=('ifsc','bank_id','branch','address','city','district','state','bank_name',)  # don't miss the comma
    ordering = ['ifsc']
    
    


