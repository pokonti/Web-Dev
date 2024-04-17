from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('', views.index, name='index'),
    path('companies/', views.CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', views.company),
    path('companies/<int:pk>/vacancies', views.vacancies_by_company),
    path('vacancies/', views.vacancies),
    path('vacancies/<int:pk>/', views.vacancy),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]