import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(
    private router: Router
  ) {

  }
  navigateToAbout():void {
    this.router.navigate(['about']);
  }
  navigateToHome():void {
    this.router.navigate(['home'])
  }
  navigateToApp():void {
    this.router.navigate(['app'])
  }

}