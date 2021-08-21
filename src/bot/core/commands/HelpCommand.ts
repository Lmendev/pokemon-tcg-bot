import { Kernel } from '../modules/Kernel';
import {ICommand} from './ICommand'


export class HelpCommand implements ICommand {
    name = "help";
    kernel: Kernel;

    constructor(kernel: Kernel) {
        this.kernel = kernel;
    }

    public execute(): void {
        this.kernel.help();
    }
}