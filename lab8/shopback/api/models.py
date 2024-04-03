from django.db import models

class Category(models.Model):
    name = models.CharField(max_length = 255)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self) -> str:
        return self.name
    
    def to_json(self):
        return {
            'name': self.name,
        }
    
class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length = 255)
    price = models.FloatField()
    description = models.TextField(blank=True, null=True)
    count = models.IntegerField()
    is_active = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name
    
    def to_json(self):
        return {
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }
