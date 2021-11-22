import { Args, Command, CommandMethod } from '@bleed-believer/command';
import { exec } from '../tool/exec/index.js';
import clip from 'clipboardy';

@Command({
    title: 'launch verbose',
    main: [ 'verbose', '...args' ]
})
export class LaunchVerboseCommand {
    @CommandMethod()
    async start(): Promise<void> {
        const argv = process.argv.slice(3);
        if (!argv.length) {
            throw new Error('You must enter at least a command to execute.');
        }

        const resp = await exec(argv);
        if (resp.stdout) {
            const text = resp.stdout.toString('utf-8');
            console.log(text);
            await clip.write(text);
        } else if (resp.stderr) {
            const text = resp.stderr.toString('utf-8');
            throw new Error(text);
        } else {
            throw new Error('No message printed by the command...');
        }
    }
}