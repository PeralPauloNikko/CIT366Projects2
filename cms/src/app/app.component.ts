import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature: string = 'documents';

/*  onNavigate(feature: string) {
    this.selectedFeature = feature;
  }*/
  switchView(selectedFeature: string){
  this.selectedFeature = selectedFeature;
  }
}
