import { exec } from './tool/exec/exec.js';
import clip from 'clipboardy';

export async function main(): Promise<void> {
    const argv = process.argv.slice(2);
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

export default {}