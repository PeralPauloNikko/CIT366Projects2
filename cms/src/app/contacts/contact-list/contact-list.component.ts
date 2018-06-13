import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from "../contact.model";
import {MOCKCONTACTS} from "../MOCKCONTACTS";
import {ContactService} from "../contact.service";
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
 @Output() selectedContactEvent = new EventEmitter<Contact>();
  //lesson 3 page 6 1a
  contacts: Contact[] = [];
  constructor(private contactService: ContactService) {
    this.contacts = MOCKCONTACTS;
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
  //emits the selectedContactEvent (which contains the images) and then outputs it//
  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
