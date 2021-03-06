import { Injectable, Renderer2 } from '@angular/core';
import { DragEventCounterService } from './../providers/drag-event-counter-service';

@Injectable()
export class DragEventService {

  constructor(public dragEventCounterService: DragEventCounterService) { }

  public preventEventsOnBody(renderer: Renderer2): void {
    renderer.listen('body', 'dragenter', event => this.preventDefaultDragAction(event));
    renderer.listen('body', 'dragover', event => this.preventDefaultDragAction(event));
    renderer.listen('body', 'drop', event => this.preventDefaultDragAction(event));
  }

  public handleDragEvent(event: DragEvent, enterFunction: Function, leaveFunction: Function, dropFunction: Function): void {
    this.preventDefaultDragAction(event);
    switch (event.type) {
      case 'dragstart': this.dragstart(event); break;
      case 'dragover': this.dragover(event); break;
      case 'dragenter': this.dragenter(event, enterFunction); break;
      case 'dragleave': this.dragleave(event, leaveFunction); break;
      case 'drop': this.drop(event, dropFunction); break;
      default: throw new Error('Invalid drag event type: ' + event.type);
    }
  }

  private dragstart(event: DragEvent): void {
    event.dataTransfer.effectAllowed = 'copyMove';
  }

  private dragover(event: DragEvent): void {
    event.dataTransfer.dropEffect = 'copy';
  }

  private dragenter(event: DragEvent, enterFunction: Function): void {
    const element: Element = (event.currentTarget as Element);
    this.dragEventCounterService.inc(element.id);
    this.dragEventCounterService.callIfFirstEvent(element.id, enterFunction);
    event.dataTransfer.dropEffect = 'copy';
  }
  private dragleave(event: DragEvent, leaveFunction: Function): void {
    const element: Element = (event.currentTarget as Element);
    this.dragEventCounterService.dec(element.id);
    this.dragEventCounterService.callIfLastEvent(element.id, leaveFunction);
  }

  private drop(event: DragEvent, dropFunction: Function): void {
    const element: Element = (event.currentTarget as Element);
    this.dragEventCounterService.reset(element.id);
    dropFunction();
  }

  private preventDefaultDragAction(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

}
