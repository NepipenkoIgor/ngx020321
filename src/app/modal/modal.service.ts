import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IModalData {
  component: Type<any>;
  context: any;
}


@Injectable()
export class ModalService {

  private modalSequence$$: Subject<IModalData | null> = new Subject();  // Observable + Observer / next/error/complete

  constructor() {
  }

  public open(data: IModalData | null): void {
    this.modalSequence$$.next(data);
  }

  public close(): void {
    this.open(null);
  }

  public get modalSequence$(): Observable<IModalData | null> {
    return this.modalSequence$$.asObservable();
  }
}
