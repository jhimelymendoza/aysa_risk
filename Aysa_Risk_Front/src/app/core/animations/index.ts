import {trigger, animate,style,transition,state } from '@angular/animations';
export const  fadeInOut = trigger('fadeInOut',[
    state('0, void', style({
        opacity: 0
    })),
    state('1, *', style({
        opacity: 1
    })),
    transition('1 => 0', animate( '300ms ease-out' )),
    transition('0 => 1', animate( '300ms ease-in' )),
    transition('void <=> *', animate( '300ms ease-in' ))
])