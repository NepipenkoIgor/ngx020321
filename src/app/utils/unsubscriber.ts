import { Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class UnSubscriber implements OnDestroy {
  public subscribeControl = new Subject();

  public ngOnDestroy(): void {
    this.subscribeControl.next();
    this.subscribeControl.complete();
  }
}
