import { Args, Command, CommandMethod } from '@bleed-believer/command';
import { exec } from '../tool/exec/index.js';
import clip from 'clipboardy';

@Command({
    title: 'launch',
    main: [ '...args' ]
})
export class LaunchCommand {
    @CommandMethod()
    async start(args: Args): Promise<void> {
        const argv = process.argv.slice(2);
        if (!argv.length) {
            throw new Error('You must enter at least a command to execute.');
        }

        const resp = await exec(argv);
        if (resp.stdout) {
            const text = resp.stdout.toString('utf-8');
            await clip.write(text);
        } else if (resp.stderr) {
            const text = resp.stderr.toString('utf-8');
            throw new Error(text);
        } else {
            throw new Error('No message printed by the command...');
        }
    }
}