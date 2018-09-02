import { transition, style, animate } from '@angular/animations';
import { cubicBezier } from '@app/shared/animations/easing';

export const foldOut = transition(':enter', [
  style({ height: '*', paddingTop: '*', paddingBottom: '*' }),
  animate(cubicBezier, style({ height: 0, paddingTop: 0, paddingBottom: 0 }))
]);
