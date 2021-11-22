import { spawn } from 'child_process';
import { ExecResult } from './exec-result';

export function exec(argv: string[]): Promise<ExecResult> {
    return new Promise((resolve, reject) => {
        const copy = [ ...argv ];
        if (copy.length === 0) {
            throw new Error('Empty command now allowed.');
        }

        const child = spawn(
            copy.shift() as string,
            copy
        );

        let exeErr: Error;
        child.on('error', err => {
            exeErr = err;
        })

        const arrOut: Buffer[] = [];
        child.stdout.on('data', (chunk: Buffer) => {
            arrOut.push(chunk);
        });

        const arrErr: Buffer[] = [];
        child.stderr.on('data', (chunk: Buffer) => {
            arrErr.push(chunk);
        });

        child.on('close', () => {
            if (!exeErr) {
                const res: ExecResult = {};
                if (arrOut.length) {
                    res.stdout = Buffer.concat(arrOut);
                }
                
                if (arrErr.length) {
                    res.stderr = Buffer.concat(arrErr);
                }

                resolve(res);
            } else {
                reject(exeErr);
            }
        });
    });
}