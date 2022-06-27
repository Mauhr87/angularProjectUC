import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :HttpClient) { }

  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=24`);
  }

  getTrendingStickers(){
    return this.http.get(`https://api.giphy.com/v1/stickers/trending?api_key=${environment.giphyApiKey}&limit=24`);
  }

}
