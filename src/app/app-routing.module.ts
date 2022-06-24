import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
