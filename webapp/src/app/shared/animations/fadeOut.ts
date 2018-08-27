import { animate, style, transition } from '@angular/animations';

export const fadeOut = function(timing = '0.2s') {
  return transition(':leave', [
    style({ opacity: 1 }),
    animate(timing, style({ opacity: 0 }))
  ]);
};
