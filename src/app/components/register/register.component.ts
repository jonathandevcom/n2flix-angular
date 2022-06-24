import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {};
  error: string | null = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  register() {
      this.auth.addUser(this.user).subscribe({
        next: (res) => {
            this.user = {};
            this.router.navigateByUrl('/auth');
        },
        error: res => {
          this.error = res.error.message;
        }
        }); 
      }
      }
      