import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Output() selectedMessageEvent = new EventEmitter<Message>();
  messages: Message[] = [
    new Message('1', '', 'Hi', 'Nikko'),
    new Message('2', '', 'Whats up', 'Allison'),
    new Message('3','None','Yup','Nice')
  ];
  constructor() {
  }
  ngOnInit() {
  }
  onSelected(message: Message) {
    this.selectedMessageEvent.emit(message);
  }
}
