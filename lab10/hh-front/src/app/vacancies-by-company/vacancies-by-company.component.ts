import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../data';

import { CompaniesService } from '../services/companies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancies-by-company',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vacancies-by-company.component.html',
  styleUrl: './vacancies-by-company.component.css'
})
export class VacanciesByCompanyComponent implements OnInit{
  vacancies!: Vacancy[];

  constructor(private api: CompaniesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.getVacancies();
  }

  getVacancies() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.api.getVacanciesByCompany(id).subscribe((vacancies) => {
        this.vacancies = vacancies
      });
    });
  }

}
