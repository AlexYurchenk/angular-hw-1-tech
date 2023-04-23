import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortingOrder } from 'src/app/sorting-order';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent {
  @Input() isDeleteButtonDisabled: boolean = true;
  @Output() onSearch = new EventEmitter<string>();
  @Output() onAllSelected = new EventEmitter<boolean>();
  @Output() onNewestSort = new EventEmitter<void>();
  @Output() onAlphabeticalOrderSort = new EventEmitter<void>();
  @Output() onDeleteClick = new EventEmitter<void>();

  isAllSelected: boolean = false;
  query = '';
  currentSortingOrder: null | SortingOrder = null;
  handleInput(e: Event) {
    this.query = (e.target as HTMLInputElement).value.trim();
    const value = this.query.toLocaleLowerCase();
    this.onSearch.emit(value);
  }
  handleSelectAll() {
    this.isAllSelected = !this.isAllSelected;
    this.onAllSelected.emit(this.isAllSelected);
  }
  handleNewestSort() {
    this.onNewestSort.emit();
  }
  handleAlphabeticalOrderSort() {
    this.onAlphabeticalOrderSort.emit();
  }
  handleDeleteClick() {
    this.onDeleteClick.emit();
  }
}
