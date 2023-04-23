import { Component, EventEmitter, Input, Output } from '@angular/core';
import IUser from '../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Input() isChecked: boolean = false;
  @Output() onChecked = new EventEmitter<string>();

  handleChecked(id: string) {
    this.onChecked.emit(id);
    this.isChecked = !this.isChecked;
  }
}
