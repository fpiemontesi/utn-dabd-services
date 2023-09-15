import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[maCambiarFondo]'
})
export class CambiarFondoDirective implements OnInit {
  @Input() color: string = 'red';
  @Input() visible: boolean = true;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.style.display = this.visible ? 'block' : 'none';
  }

}
