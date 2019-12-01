import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'BQAGidLuEUJmRrsd2wDMqwQM3Rh7E9Y6HYc6xeKNp4TExAh8PUOAg2ITguoH96kj8le6iEtl1aoqnFLvoSe0rm_YxRCNIpLcmWruSBnNN3_p_AtSqB55vhF1ICXng5NyCDw7WTQHUnbTEoZmYtAccv9Q5g';
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
