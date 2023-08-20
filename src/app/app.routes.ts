import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.routes').then((m) => m.authRoutes),
  },
];
