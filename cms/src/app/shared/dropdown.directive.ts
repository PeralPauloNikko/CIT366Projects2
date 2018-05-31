import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // bring isOpen into scope
  private isOpen = false;
  @HostBinding('class.open')  get opened(){
    return this.isOpen;
  }
// click opens the dropdown menu
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  //Extra hostlistener closes the dropdown when mouse is moved away//
  @HostListener('mouseleave') close(){
    this.isOpen = !this.isOpen;
  }
}
