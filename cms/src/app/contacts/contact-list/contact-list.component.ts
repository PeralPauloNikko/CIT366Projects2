import { Component, OnInit } from '@angular/core';
import {ContactModel} from "../contact.model";
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
contacts: ContactModel[] = [
  new ContactModel('1','Bro. Jackson','jackson@byui.edu','208-496-3771','https://web.byui.edu/Directory/Employee/jacksonk.jpg','null'),
  new ContactModel('2','Bro. Barzee','barzeer@byui.edu','208-496-3768','https://web.byui.edu/Directory/Employee/barzeer.jpg','null')
];

  constructor() { }

  ngOnInit() {
  }

}
