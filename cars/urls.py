from django.urls import path
from .views import CarListAPIView, CarDetailAPIView

urlpatterns = [
    path('', CarListAPIView.as_view()),
    path('<int:pk>/', CarDetailAPIView.as_view()),
]
