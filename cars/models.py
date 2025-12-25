from django.db import models

class Car(models.Model):
    title = models.CharField(max_length=200)
    brand = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    price_daily = models.DecimalField(max_digits=10, decimal_places=2)
    price_monthly = models.DecimalField(max_digits=10, decimal_places=2)
    price_yearly = models.DecimalField(max_digits=10, decimal_places=2)

    rating = models.FloatField(default=0)
    rented_count = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title