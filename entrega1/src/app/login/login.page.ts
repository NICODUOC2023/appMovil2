import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  
  username: string = '';
  password: string = '';
  nombre: string | null = null;
  nombreAlmacenado: string | null = null;

  constructor(private authService: AuthService, private router: Router, private storage: Storage) {
  }



  login() {
    if (this.authService.login(this.username, this.password)) {
      //aprovechamos de usar state para llevar la informacion al dashboard.
      this.router.navigate(['/inicio'], { state: { username: this.username } });
      } else {
      alert('Nombre de usuario o contraseña incorrectos');
      }
      
  }
  goToReset() {
    this.router.navigate(['/resetear']);
  }


}
