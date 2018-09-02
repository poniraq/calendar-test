import { animate, style, transition } from '@angular/animations';

export const fadeOut = transition(':leave', [
  style({ opacity: 1 }),
  animate('0.2s', style({ opacity: 0 }))
]);
