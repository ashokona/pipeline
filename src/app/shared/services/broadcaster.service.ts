import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcasterService {

  private groupSelectionChange$ = new Subject();

  broadcastGroupChange(groupId) {
    this.groupSelectionChange$.next(groupId);
  }

  onGroupChange() {
    return this.groupSelectionChange$;
  }
}

