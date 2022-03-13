import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  popular!: Movie[];
  theaters!: Movie[];
  kids!: Movie[];
  drama!: Array<Movie>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data['results'].slice(0,6);
    });

    this.moviesService.getAll().subscribe(data=> {
      this.theaters = data['results'].slice(0,6);
    });

    this.moviesService.getKids().subscribe(data=> {
      this.kids = data['results'].slice(0,6);
    });

    this.moviesService.getDrama().subscribe(data=> {
      this.drama = data['results'].slice(0,6);
    });

  }
}