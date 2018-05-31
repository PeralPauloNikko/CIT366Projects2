import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() selectedFeatureEvent = new EventEmitter<string>();
/*
  constructor() { }
*/
onSelected(selectedEvent: string){
    this.selectedFeatureEvent.emit(selectedEvent);
}
  ngOnInit() {
  }
}
