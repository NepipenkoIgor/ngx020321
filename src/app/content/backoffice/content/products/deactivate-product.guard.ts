import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeactivateProductGuard implements CanDeactivate<any> {
  canDeactivate(): boolean {
    console.log('Deactivate!!!!');
    return false;
  }

}
