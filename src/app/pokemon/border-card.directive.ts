import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pokemonBC]'
})

/**
 * @Directive qui attribue une couleur et une taille
 * dans notre cas on l'utilise en exemple our changer
 * le style d'un élement
 */
export class BorderCardDirective {
  private initialColor: string = '#F5F5F5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 200;
  private borderColor: string = "#009688"
  private defaultBackgroundColor: string = "#ffffff"

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  // si je passe la souris sur l'élement qui a cette directive
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor)
    this.setBackgroundColor("#000fff")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
    this.setBackgroundColor(this.defaultBackgroundColor)
  }

  private setBackgroundColor(color: string) {
    this.el.nativeElement.style.background = color;
  }


  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
  }

}
