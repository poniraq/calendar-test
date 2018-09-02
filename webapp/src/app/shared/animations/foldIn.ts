import { transition, style, animate } from '@angular/animations';
import { cubicBezier } from '@app/shared/animations/easing';

export const foldIn = transition(':enter', [
  style({ height: 0, paddingTop: 0, paddingBottom: 0 }),
  animate(cubicBezier, style({ height: '*', paddingTop: '*', paddingBottom: '*' }))
]);
