import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { SortingOrder } from 'src/app/sorting-order';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.scss'],
})
export class UserToolbarComponent implements OnInit, OnDestroy {
  @Input() isDeleteButtonDisabled: boolean = true;
  @Output() onSearch = new EventEmitter<string>();
  @Output() onAllSelected = new EventEmitter<boolean>();
  @Output() onNewestSort = new EventEmitter<void>();
  @Output() onAlphabeticalOrderSort = new EventEmitter<void>();
  @Output() onDeleteClick = new EventEmitter<void>();
  private readonly searchSubject = new Subject<string | undefined>();
  private searchSubscription?: Subscription;

  isAllSelected: boolean = false;
  query = '';
  currentSortingOrder: null | SortingOrder = null;
  ngOnInit(): void {
    this.searchSubscription = this.searchSubject
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((results) => this.onSearch.emit(results));
  }
  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }
  handleInput(e: Event) {
    this.query = (e.target as HTMLInputElement).value.trim();
    const value = this.query.toLocaleLowerCase();
    this.searchSubject.next(value);
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
