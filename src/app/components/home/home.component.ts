import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: string | null = "";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }

  deconnection() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');
  }

}
