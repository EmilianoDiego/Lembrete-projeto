import {  Directive, ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEfeitos]'
})
export class EfeitosDirective {
  
  constructor(
    private elementRef:ElementRef,
    private renderer:Renderer2
  ) {}

   @HostListener('mouseover')quandoMousePorCima(){
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow','1px 4px 8px ' 
    )
  }
  @HostListener('mouseleave')quandoMouseSair(){
    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow')
  }

}