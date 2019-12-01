import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  @Input() artista:any;

  constructor() { }

  ngOnInit() {
  }

}
