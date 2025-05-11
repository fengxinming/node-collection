import { inspect } from 'node:util';

import pc from 'picocolors';

import { Clrsole } from './types';

function colorText(color: string, root: string, messages: any[], depth: number): string {
  for (let i = 0, len = messages.length, tmp; i < len; i++) {
    tmp = messages[i];
    switch (typeof tmp) {
      case 'object':
        tmp = inspect(tmp, { depth });
        break;
      case 'symbol':
        tmp = tmp.toString();
        break;
    }
    root += ` ${tmp}`;
  }
  return pc[color](root);
}

export const clrsole: Clrsole = {} as any;
Object.entries(pc).forEach(([color, fn]) => {
  if (typeof fn === 'function') {
    clrsole[color] = (...messages: any[]) => {
      // eslint-disable-next-line no-console
      console.log(colorText(color, '', messages, Infinity));
    };
  }
});
