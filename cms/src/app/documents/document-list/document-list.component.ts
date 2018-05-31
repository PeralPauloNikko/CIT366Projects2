import {Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
OnDestroy
} from '@angular/core';
import {Document} from "../document.model";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
@Input() documents: Document[] = [
  new Document('A Test Recipe', 'This is simply a test', 'image','imageUrl','none'),
  new Document('A Test Recipe 2','Nikko','Nikkos Recipe','imageUrl','No children'),
  new Document('A Test Recipe 3','Booyah','Booya Document','www.google.com','2 children'),
  new Document('A Test Recipe 4','Boyyyyyahhhh','Soooooot','www.neverdie.com','infinity')
];
  constructor() {
  }
  ngOnInit() {
  }
  onSelectedDocument(document: Document) {
this.selectedDocumentEvent.emit(document);
  }
}

