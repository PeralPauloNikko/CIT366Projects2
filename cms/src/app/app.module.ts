import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { HeaderComponent } from './header.component';
import {ContactListComponent} from "./contacts/contact-list/contact-list.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactsDetailComponent} from "./contacts/contacts-detail/contacts-detail.component";
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    ContactsComponent,
    ContactsDetailComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
