import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';

@Directive({
  selector: '[active-menu]' // Attribute selector
})
export class ActiveMenu {

  @Input('activeRoute') activeRoute:any;

  constructor() {
    console.log('Hello ActiveMenu Directive');
  }

  ngAfterViewInit() {

  }

}
