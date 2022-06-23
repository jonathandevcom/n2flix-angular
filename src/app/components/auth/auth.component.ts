import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  
  user: User = {};
  error: string | null = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  
  connexion() {
    this.auth.login(this.user).subscribe({
      next: (res) => {
        if (res.token !=null) {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/movies');
    }
  },
  error: res => {
    this.error = res.error.message;
  }
  }); 
}
}
