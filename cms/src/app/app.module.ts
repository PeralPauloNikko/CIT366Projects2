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
import {DocumentsService} from "./documents/documents.service";
import {MessagesService} from "./messages/messages.service";
import {MessagesComponent} from "./messages/messages.component";
import {Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing";
import { DocumentViewComponent } from './documents/document-view/document-view.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import {WindRefService} from "./wind-ref.service";
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';

const app_Routes: Routes = [

]
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
    MessagesComponent,
    DocumentViewComponent,
    DocumentEditComponent,
    ContactEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactService,DocumentsService, MessagesService, WindRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
