import { CommandRouter } from '@bleed-believer/command';
import { BleedModule } from '@bleed-believer/core';

import { LaunchVerboseCommand } from './launch-verbose/launch-verbose.command.js';
import { LaunchCommand } from './launch/launch.command.js';

@BleedModule({
    imports: [
        CommandRouter.addToRouter({
            commands: [
                LaunchVerboseCommand,
                LaunchCommand,
            ],
            after: () => {
                console.log('cmd-clip -> [ OK ]: Command executed and copied!');
            },
            error: err => {
                console.log('cmd-clip -> [FAIL]:', err?.message);
            }
        })
    ]
})
export class AppRoutingModule { }