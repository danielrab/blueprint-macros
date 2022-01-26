import { Connection } from './connection';
import { BaseElement } from './elements/baseElement';

export class Blueprint {
  elements: BaseElement[];
  connections: Connection[];

  constructor(elements: BaseElement[] = [], connections: Connection[] = []) {
    this.elements = elements;
    this.connections = connections;
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(100, 75, 50, 0, 2 * Math.PI);
    context.stroke();
  }
}
