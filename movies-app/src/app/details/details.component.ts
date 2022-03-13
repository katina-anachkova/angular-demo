import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  myMovie: any;

  constructor(private route: ActivatedRoute, private movieService: MoviesService  ) { } //DI; injecting and automatically creating variables through the constr

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id: any = params['id'];
      this.movieService.getMovie((id)).subscribe((movie) => {
        this.myMovie = movie;
      })
    })
  }

}
