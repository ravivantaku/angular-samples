import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user: User;
  userList: User[];
  constructor() {
    this.userList = [{ name: 'Ravi', age: '12', address: 'Hyd' },
    { name: 'Ravi', age: '', address: 'Hyd' }, { name: 'Ravi', age: '12   ', address: 'Hyd' }];
    this.user = { name: '', age: '', address: '' };
  }

  ngOnInit() {
  }
  addArticle(): boolean {
    // console.log(`Adding user name: ${newname.value}, age: ${newage.value} and address: ${newaddress.value}`);
    console.log(`Adding user name: ${this.user.name}, age: ${this.user.age} and address: ${this.user.address}`);
    return false;
  }
}
