#!/usr/bin/env node

import brainPrimeLogic from '../src/games/brain-prime-logic.js';
import { startTheGame } from '../src/index.js';

startTheGame(brainPrimeLogic, 'brainGcd');
