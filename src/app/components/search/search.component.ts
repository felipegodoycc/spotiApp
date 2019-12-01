import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tracks:any[] = [];
  artists:any[] = [];
  loading: Boolean = false;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    if(termino != ''){
      this.loading = true
      this._spotifyService.buscarItem(termino).subscribe( (res: any) => {
        this.tracks = res.tracks.items;
        this.artists = res.artists.items;
        this.loading = false;
      })  
    }
    else {
      this.tracks = [];
      this.artists = [];
    }
  }

}
