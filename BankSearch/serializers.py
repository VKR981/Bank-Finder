from rest_framework.serializers import ModelSerializer
from .models import banks

class BankSerializer(ModelSerializer):

    class Meta:
        model = banks
        fields = '__all__'