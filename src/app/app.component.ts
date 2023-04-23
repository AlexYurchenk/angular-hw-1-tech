import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import IUser from './user/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: IUser[] = [];
  filteredUsers: IUser[] = [];
  selectedItems: string[] = [];
  errorMessage!: string;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
  handleSearch(q: string) {
    this.filteredUsers = this.users.filter(
      (u) =>
        u.firstname.toLocaleLowerCase().includes(q) ||
        u.lastname.toLocaleLowerCase().includes(q)
    );
  }
  handleChecked(id: string) {
    if (this.selectedItems.includes(id)) {
      this.selectedItems = this.selectedItems.filter((i) => i !== id);
    } else {
      this.selectedItems = [...this.selectedItems, id];
    }
  }
  handleSelectAll(e: boolean) {
    if (e) {
      this.selectedItems = this.users.map((u) => u.id);
    } else {
      this.selectedItems = [];
    }
  }
  handleNewestSort() {
    this.filteredUsers = [
      ...this.filteredUsers.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    ];
  }
  handleAlphabeticalOrderSort() {
    this.filteredUsers = [
      ...this.filteredUsers.sort((a, b) =>
        a.firstname.localeCompare(b.firstname)
      ),
    ];
  }
  handleDeleteClick() {
    this.userService.deleteUsers(this.selectedItems);
    this.filteredUsers = this.filteredUsers.filter(
      (e) => !this.selectedItems.includes(e.id)
    );
  }
}
