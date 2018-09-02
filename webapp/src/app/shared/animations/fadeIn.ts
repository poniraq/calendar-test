import { animate, style, transition } from '@angular/animations';


export const fadeIn = transition(':enter', [
  style({ opacity: 0 }),
  animate('0.2s', style({ opacity: 1 }))
]);
