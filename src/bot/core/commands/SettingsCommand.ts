import { Kernel } from '../receivers/Kernel';
import {ICommand} from './ICommand'


export class SettingsCommand implements ICommand {
    name = "settings";
    kernel: Kernel;

    constructor(kernel: Kernel) {
        this.kernel = kernel;
    }

    public execute(): void {
        this.kernel.settings();
    }
}