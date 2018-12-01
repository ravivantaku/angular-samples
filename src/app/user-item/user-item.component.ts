import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user-list/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit, OnChanges {
  private _user;
  @Input() user: User;
  @Input()
  set userAge(user) {
    this._user = user;
    this._user.age = (user && user.age.trim()) || '23';
  }
  get userAge() {
    return this._user;
  }
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('user', this.user);
  }
}
