from django.db import models

class Company(models.Model):
    name = models.CharField(max_length = 255)
    description = models.TextField(blank = True, null = True)
    city = models.CharField(max_length = 255)
    address = models.TextField(blank = True, null = True)

    class Meta: 
        verbose_name_plural = 'Companies'

    def __str__(self) -> str:
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }
    
class Vacancy(models.Model):
    name = models.CharField(max_length = 255)
    description = models.TextField(blank = True, null = True)
    salary = models.FloatField()
    company = models.ForeignKey(Company, related_name='vacancies', on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Vacancies'
    
    def __str__(self) -> str:
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name,
        }