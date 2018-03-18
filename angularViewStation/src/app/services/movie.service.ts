import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class MovieService {
  baseRoute = `${environment.api}/api/movies`;

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get(this.baseRoute)
    .map(res => res.json());
  }

  getPostById(id) {
    return this.http.get(this.baseRoute + '/' + id)
    .map(res => res.json());
  }

  addMovie(movie) {
    return this.http.post(this.baseRoute, movie)
    .map(res => res.json());
  }

  updateMovie(movie) {
    return this.http.put(this.baseRoute + '/' + movie._id, movie)
    .map(res => res.json());
  }

  deleteMovie(id) {
    return this.http.delete(this.baseRoute + '/' + id)
    .map(res => res.json());
  }

}
