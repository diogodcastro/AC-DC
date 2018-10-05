import { Window } from './window.model';
export class Controller {
  constructor(
    public id: number = null,
    public name: string = null,
    public ip: string = null,
    public window: Window
  ) {}
}
