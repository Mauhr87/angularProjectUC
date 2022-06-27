import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() Title: string = '';
  @Input() Type: string = '';
  @Input() Image: string = 'assets/home-gif-img.gif';
  @Input() CardLink: string = '';

  ngOnInit(): void {
  }

}
