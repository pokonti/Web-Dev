import json
from django.shortcuts import render
from api.serializers import CompanySerializer, CompanySerializer2
from .models import Company, Vacancy
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

def index(request):
    companies = Company.objects.all()
    vacancies = Vacancy.objects.all()
    return render(request, 'index.html', {
        'companies': companies,
        'vacancies': vacancies,
    })

@csrf_exempt 
def companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save() #inserting
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into ...
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)
            

@csrf_exempt
def company(request,pk=None):
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)
    
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(
            instance=company,
            data=data
        )
        if serializer.is_valid():
            serializer.save() #updating
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status = 400)
    
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})

def vacancies_by_company(request, pk):
    company = Company.objects.get(pk=pk)
    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe = False)

def vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe = False)
    # elif request.method == 'POST':
    #     data = json.loads(request.body)
    #     vacancy = Vacancy.objects.create(name=data.get("name"), description=data.get("description"), city=data.get("salary"), company=data.get("company"))
    #     return JsonResponse(vacancy.to_json())   


def vacancy(request,pk):
    try:
        vacancy = Vacancy.objects.get(pk=pk)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error":str(e)}, status=400)
    
    return JsonResponse(vacancy.to_json())

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


