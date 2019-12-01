import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'BQBjGPvOGoMBPJ2SuBL2GYrsCCU9nshKjc7-KzGpKfxD5VA7iGSAPijDkP1QyYU0hK-WtNp6HoqGsq7pBgnIk5H8O4umoRUjUWQ_RzxaavY-L5JbxXdJPnp3XUkQEHjXWilAAVYvxoRPHaYa_dUc7ewVzA';
  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`
  });

  constructor( private http: HttpClient) {
    console.log('Servicio spotify iniciado!');
    console.log('Token ', this.token)
  }

  getNewReleases() {
    const tracksUrl = 'https://api.spotify.com/v1/me/tracks?market=ES&limit=20&offset=0'
    return this.http.get(
        tracksUrl,
        { headers: this.headers }
    )
  }

  buscarItem(termino:string){
    const searchUrl = `https://api.spotify.com/v1/search?q=${termino}&type=track%2Cartist&market=ES&limit=10&offset=0`
    return this.http.get(searchUrl, {headers: this.headers})
  }
}
