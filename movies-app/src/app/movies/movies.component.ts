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
  searchRes!: any;
  isSearch!: boolean;

  constructor(private moviesService: MoviesService) { }

  search(myQuery:any){
    let value = myQuery['search'];
    this.moviesService.findMovie(value).subscribe(data => {
      this.searchRes = data;
      console.log(this.searchRes);
      this.isSearch = true;
    })
  }

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