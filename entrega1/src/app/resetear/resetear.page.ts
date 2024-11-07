import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetear',
  templateUrl: './resetear.page.html',
  styleUrls: ['./resetear.page.scss'],
})
export class ResetearPage {
  constructor(private router: Router) {}

  resetPassword() {
    this.router.navigate(['/login']);
  }
}
