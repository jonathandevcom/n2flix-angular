import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {};
  movies: Array<Movie> = [];

  constructor(private mv:MovieService) { }
  ngOnInit(): void {
    this.initMovie();
  }

  initMovie() {
    this.mv.getAllMovies().subscribe(res => {
      this.movies = res;
    })
  }


}
