import { DestroyRef, inject } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

export const destroySub = () => {
  const sub = new Subject();
  inject(DestroyRef).onDestroy(() => {
    sub.next(true), sub.complete();
  });

  return () => takeUntil(sub.asObservable());
};
