import { transition, style, animate } from '@angular/animations';
import { cubicBezier } from '@app/shared/animations/easing';

export const foldIn = function(timing = '0.3s') {
  return transition(':enter', [
    style({ height: 0, paddingTop: 0, paddingBottom: 0 }),
    animate(cubicBezier(timing), style({ height: '*', paddingTop: '*', paddingBottom: '*' }))
  ]);
};
