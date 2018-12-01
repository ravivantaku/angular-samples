import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  constructor() { }

  ngOnInit() {
  }
  vote(agreed) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
