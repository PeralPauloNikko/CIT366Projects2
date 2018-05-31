import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Document} from "../document.model";

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent implements OnInit {
  @Input() document: Document;
/*
  @Output() selectedDocumentEvent = new EventEmitter<void>();
*/
  constructor() {
  }
  ngOnInit(){
  }
/*  onSelected(){
    this.selectedDocumentEvent.emit();
  }*/
}

