import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserToolbarComponent } from './user-toolbar/user-toolbar.component';
@NgModule({
  declarations: [UserListComponent, UserCardComponent, UserToolbarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
  ],
  exports: [UserListComponent, UserToolbarComponent],
})
export class UserModule {}
