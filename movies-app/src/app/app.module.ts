//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { DetailsComponent } from './details/details.component';

//services
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MoviesComponent },
      { path: 'movie/:id', component: DetailsComponent }
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
