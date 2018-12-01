import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-votertaker',
  templateUrl: './votertaker.component.html',
  styleUrls: ['./votertaker.component.scss']
})
export class VotertakerComponent implements OnInit, AfterViewInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
  @ViewChild('votertaker') voterTaker;
  constructor() { }

  ngOnInit() {
  }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  ngAfterViewInit() {
    console.log(this.voterTaker);
  }
}
