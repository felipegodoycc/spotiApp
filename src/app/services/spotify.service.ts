import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token = 'BQCoNBB4TSq2dWJt0Df1IzDO9cc8V9T1BK_yArdDnq-7l5Vqo6WxhuZlkNa4ZU-VOPLjb_i64kjGTRAuVsBDtDDzlOLgH4FtTWYUt0DiOdPeV6GWy-x9_vkfhih8a1JW7-Bh8Qg832RHWtw';

  constructor( private http: HttpClient) {
    console.log('Servicio spotify iniciado!');
   }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get(
      'https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES',
      {headers}
    );
  }
}
