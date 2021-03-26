import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent],
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: [ModalService]
    };
  }
}
