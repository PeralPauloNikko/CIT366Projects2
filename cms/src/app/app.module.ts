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
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import {MessageListComponent} from "./messages/message-list/message-list.component";
import {DocumentsComponent} from "./documents/documents.component";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ContactService} from "./contacts/contact.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactListComponent,
    ContactsComponent,
    ContactsDetailComponent,
    ContactItemComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessageEditComponent,
    MessageItemComponent,
    MessageListComponent,
    DocumentsComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
