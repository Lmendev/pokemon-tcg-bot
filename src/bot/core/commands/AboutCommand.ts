import { Kernel } from '../receivers/Kernel';
import {ICommand} from './ICommand'


export class AboutCommand implements ICommand {
    name = "about";
    kernel: Kernel;

    constructor(kernel: Kernel) {
        this.kernel = kernel;
    }

    public execute(): void {
        this.kernel.about();
    }
}