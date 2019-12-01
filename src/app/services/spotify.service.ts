import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'BQDiNzlXvSjEpYnVApVDIFO6iw-BiHIEfPrYAqM_YL4_ygaIsXxCWPdXkdaUEaafhnjDTWm-nf0qC7gDalRH1L4X-SG1gFM6fneMT_Rzt5O20EKAf7Nb3ckc8rcevG4YqbeK9-20n_YlQIW9nf6ECJyuiQ';
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
