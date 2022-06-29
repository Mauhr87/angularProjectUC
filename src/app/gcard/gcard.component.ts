import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcard',
  templateUrl: './gcard.component.html',
  styleUrls: ['./gcard.component.css']
})
export class GcardComponent implements OnInit {

  @Input() Card: any;

  ngOnInit(): void {
  }

}
