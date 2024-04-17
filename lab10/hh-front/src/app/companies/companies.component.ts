import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../services/companies.service';
import { Company } from '../data';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit{
  companies!: Company[];
  constructor(private api: CompaniesService) {}

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.api.getAllCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }
}
