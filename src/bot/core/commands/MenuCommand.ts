import { Kernel } from '../modules/Kernel';
import {ICommand} from './ICommand'


export class MenuCommand implements ICommand {
    name = "menu";
    kernel: Kernel;

    constructor(kernel: Kernel) {
        this.kernel = kernel;
    }

    public execute(): void {
        this.kernel.menu();
    }
}