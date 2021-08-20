import { ICommand } from './commands/ICommand'
import { AboutCommand } from './commands/AboutCommand'
import { HelpCommand } from './commands/HelpCommand';
import { MenuCommand } from './commands/MenuCommand';

import { SettingsCommand } from './commands/SettingsCommand';
import { Kernel } from './receivers/Kernel';

export class Terminal {
    private commands: ICommand[] = [];
    private kernel: Kernel = new Kernel();

    constructor (){
        this.commands.push(new AboutCommand(this.kernel));
        this.commands.push(new HelpCommand(this.kernel));
        this.commands.push(new MenuCommand(this.kernel));
        this.commands.push(new SettingsCommand(this.kernel));
    }

    public setCommand(command: ICommand) {
        this.commands.push(command);
    }

    public executeCommand(commandName: string): void {
        let command:ICommand | undefined = this.commands.find(command => command.name === commandName);

        if (command){
            command.execute();
        }else{
            console.error("command "+ commandName + " not found");
        }
    }
}