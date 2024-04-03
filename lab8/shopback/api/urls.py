from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('', views.index, name='index'),
    # path('categories/', views.categories, name='categories'),
    path('categories/', views.categories),
    path('products/', views.products, name='products'),
    path('products/<int:pk>/', views.detail, name='detail'),
    path('categories/<int:pk>/', views.detail_of_category, name='cat'),
    path('categories/<int:pk>/products', views.products_by_category),
]