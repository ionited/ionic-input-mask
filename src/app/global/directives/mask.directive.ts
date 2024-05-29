import { Directive, ElementRef, Input } from '@angular/core';
import Inputmask from 'inputmask';

@Directive({
  selector: '[mask]',
  standalone: true
})
export class MaskDirective {
  @Input() mask: any;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.el.nativeElement.getInputElement()
    .then((value: HTMLInputElement) => Inputmask(this.mask).mask(value));
  }
}
