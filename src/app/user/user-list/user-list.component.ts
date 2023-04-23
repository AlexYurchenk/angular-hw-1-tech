import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import IUser from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() users: IUser[] = [];
  @Input() selectedItems: string[] = [];
  @Output() onChecked = new EventEmitter<string>();

  constructor() {}

  userTrackBy(index: number, user: IUser): string {
    return user.id;
  }
  handleChecked(id: string) {
    this.onChecked.emit(id);
  }
}
