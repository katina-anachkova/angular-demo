import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import  { Movies} from "../models/movies";

const apiKey = '92a1c6b41b031d2d9957170a96c71bb6';

@Injectable()
export class MoviesService {
    path: string = "https://api.themoviedb.org/3/";
    popular: string = "discover/movie?sort_by=popularity.desc";
    theaters: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
    authentication: string = "&api_key=";
    kids: string = "discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
    drama: string = "discover/movie?with_genres=18&primary_release_year=2014";
    movie: string = 'movie/'
    movieAuth: string = '?api_key='
    constructor(private http: HttpClient) { } 
    
    getPopular(): Observable<any> {
        return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
    }

    getAll(): Observable<any> {
        return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`)
    }  

    getKids(): Observable<any> {
        return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`)
    }  

    getDrama(): Observable<any> {
        return this.http.get<Movies>(`${this.path}${this.drama}${this.authentication}${apiKey}`)
    }  

    getMovie(id: any) {
        return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`)

    }
}