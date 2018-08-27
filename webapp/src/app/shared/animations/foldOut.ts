import { transition, style, animate } from '@angular/animations';
import { cubicBezier } from '@app/shared/animations/easing';

export const foldOut = function(timing = '0.3s') {
  return transition(':enter', [
    style({ height: '*', paddingTop: '*', paddingBottom: '*' }),
    animate(cubicBezier(timing), style({ height: 0, paddingTop: 0, paddingBottom: 0 }))
  ]);
};
