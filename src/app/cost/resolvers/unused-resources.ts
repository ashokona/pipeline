import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable} from 'rxjs';
import { of } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

@Injectable()
export class UnusedResourcesResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    return;
    // return of('Resolved Data').pipe(delay(2000));
    return of('Resolved Data');
  }
}
