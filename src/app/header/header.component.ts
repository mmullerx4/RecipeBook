import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output() featureSelected = new EventEmitter<string>(); //output to be able to listen to outside of component for the parent component (header.html)

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
