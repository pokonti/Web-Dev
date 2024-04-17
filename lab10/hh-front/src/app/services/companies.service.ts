import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, Vacancy } from '../data';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService{
  BASE_URL: string = 'http://127.0.0.1:8000/api';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private client: HttpClient) { }

  getAllCompanies(){
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/`, {headers: this.httpHeaders});
  }

  getAllVacancies(){
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/vacancies/`, {headers: this.httpHeaders});
  }

  getVacanciesByCompany(id: number){
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${id}/vacancies`, {headers: this.httpHeaders});
  }
}
