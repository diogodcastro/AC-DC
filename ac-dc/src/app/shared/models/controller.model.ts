import { Windows } from './windows.model';
export class Controller {
  constructor(
    public id?: number,
    public name: string = null,
    public ip: string = null,
    public windows: Windows[] = new Array<Windows>()
  ) {}
}
