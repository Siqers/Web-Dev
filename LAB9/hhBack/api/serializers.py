from rest_framework import serializers

from api.models import Company , Vacancy , Application


class CompanySerializer(serializers.Serializer) : 
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

class CompanyModelSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Company 
        fields = ('id','name','description','city','address')
        
class VacancyModelSerializer(serializers.ModelSerializer):
    class Meta :
        model = Vacancy
        fields = ('id','name','description','salary','company')

class ApplicationModelSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Application
        fields = ('full_name', 'email', 'vacancy', 'data')        