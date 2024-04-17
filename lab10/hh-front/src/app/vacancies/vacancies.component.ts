import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../data';
import { CompaniesService } from '../services/companies.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-vacancies',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent implements OnInit{
  vacancies!: Vacancy[];

  constructor(private api: CompaniesService) {}

  ngOnInit(): void {
    this.getVacancies();
  }

  getVacancies() {
    this.api.getAllVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }
}
