from django.shortcuts import render,get_object_or_404
from .models import Company, Vacancy
from django.http.response import JsonResponse

def index(request):
    companies = Company.objects.all()
    vacancies = Vacancy.objects.all()
    return render(request, 'index.html', {
        'companies': companies,
        'vacancies': vacancies,
    })

def companies(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe = False)

def company(request,pk):
    company = get_object_or_404(Company, pk=pk)
    return JsonResponse(company.to_json())

def vacancies_by_company(request, pk):
    company = Company.objects.get(pk=pk)
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe = False)

def vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe = False)

def vacancy(request,pk):
    vacancy = get_object_or_404(Vacancy, pk=pk)
    return JsonResponse(vacancy.to_json())

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


