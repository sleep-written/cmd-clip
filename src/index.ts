#!/usr/bin/env node
import { main } from './main.js';

main()
    .then(() => {
        console.log('cmd-clip -> [ OK ]: Command executed and copied!');
    })
    .catch(x => {
        console.log('cmd-clip -> [FAIL]:', x.message);
    });
