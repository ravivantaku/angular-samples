import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.scss']
})
export class VersionChildComponent implements OnInit, OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    const log: string[] = [];
    Object.keys(changes).forEach((propName) => {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    });
    this.changeLog.push(log.join(', '));
  }
}
