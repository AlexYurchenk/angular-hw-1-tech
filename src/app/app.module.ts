import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatToolbarModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
