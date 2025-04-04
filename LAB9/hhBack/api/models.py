from django.db import models

class Company(models.Model) : 
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=30)
    address = models.TextField()

    def to_json(self):
        return {
            "id" : self.id , 
            "name" : self.name , 
            "description" : self.description , 
            "city" : self.city , 
            "address" : self.address ,
        }   

    def __str__(self) : 
        return f"{self.id} - {self.name} - {self.address}"   

class Vacancy(models.Model) :
    name = models.CharField(max_length=100) 
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE , related_name="vacancies")


    def to_json(self): 
        return { 
            "id" : self.id , 
            "name" : self.name , 
            "description" : self.description ,
            "salary" : self.salary , 
            "company" : self.company.name ,
        }
    
    def __str__(self) : 
        return f"{self.name} - {self.company.name} - {self.salary}"


    
class Application(models.Model) :
    full_name = models.CharField(max_length=100) 
    email = models.TextField()
    vacancy = models.FloatField()
    data = models.DateField()


    def to_json(self): 
        return { 
            "full_name" : self.full_name, 
            "email" : self.email,
            "vacancy" : self.description ,
            "data" : self.data,
        }
    
    def __str__(self) : 
        return f"{self.full_name} - {self.email} - {self.description} - {self.data}"


    
    
    
