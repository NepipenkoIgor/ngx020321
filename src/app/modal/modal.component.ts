import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { IModalData, ModalService } from './modal.service';

@Component({
  selector: 'course-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', {read: ViewContainerRef})
  public modalContent!: ViewContainerRef;

  public content!: any;
  public isOpen = false;
  private componentRef!: ComponentRef<any>;


  constructor(
    private modalService: ModalService,
    private cfr: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    this.modalService.modalSequence$.subscribe((data: IModalData | null) => {
      if (!data) {
        this.close();
        return;
      }
      this.isOpen = true;
      const componentFactory: ComponentFactory<any> = this.cfr.resolveComponentFactory(data.component);
      this.componentRef = this.modalContent.createComponent(componentFactory);
      Object.entries(data.context).forEach(([key, value]: [string, any]) => {
        this.componentRef.instance[key] = value;
      });

    });
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  private close(code: number = 27): void {
    if (code !== 27) {
      return;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.isOpen = false;
  }

}
