from django.contrib import admin

from api.models import Company , Vacancy

# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
   search_field = ("name" , ...)

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
   ...

class ApplicationAdmin(admin.ModelAdmin):
   ...

   