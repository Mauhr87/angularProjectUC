import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gifs: any[] = [];
  stickers: any[] = [];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {

    this.dataService.getTrendingGifs()
      .subscribe((response: any) => {
        this.gifs = response.data;
      })

    this.dataService.getTrendingStickers()
      .subscribe((response: any) => {
        this.stickers = response.data;
      })

  }
 
}
