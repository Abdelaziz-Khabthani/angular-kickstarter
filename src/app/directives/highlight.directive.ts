import { ElementRef, OnInit, Directive, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    @Input() color1:string = 'green';
    @Input() color2:string = 'blue';
    @Input() color3:string = 'red';

    @HostBinding('style.color') color:string = 'black';
    constructor(private element: ElementRef, private renderer: Renderer2){}

    ngOnInit() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color1);
    }

    @HostListener('mouseenter')
    mouseEnter(event: Event) {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color2);
        this.color = 'white';
    }

    @HostListener('mouseleave')
    mouseLeave(event: Event) {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', this.color3);
        this.color = 'white';
    }
}