import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'course-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {
  public customValue = false;
  public onChangeCb!: (value: boolean) => void;

  @HostListener('click')
  public toggle(): void {
    this.customValue = !this.customValue;
    this.onChangeCb(this.customValue);
  }

  public writeValue(value: boolean): void {
    this.customValue = value;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  public registerOnTouched(_fn: any): void {
  }
}
