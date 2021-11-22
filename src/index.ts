#!/usr/bin/env node
import { launch } from './launch.js';

import { BleedBeliever } from '@bleed-believer/core';
import { AppRoutingModule } from './app-routing.module.js';

const app = new BleedBeliever(AppRoutingModule);
app.bleed();
