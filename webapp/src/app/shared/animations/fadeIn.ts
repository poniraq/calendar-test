import { animate, style, transition } from '@angular/animations';

export const fadeIn = function(timing = '0.2s') {
  return transition(':enter', [
    style({ opacity: 0 }),
    animate(timing, style({ opacity: 1 }))
  ]);
};
