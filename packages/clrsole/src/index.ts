import { inspect } from 'node:util';

import type { LogEvent, TConverter } from 'base-log-factory';
import { Level, LogFactory, PatternLayout } from 'base-log-factory';
import { DebugAppender } from 'blf-debug-appender';

function createConverter(specifier: string): TConverter | undefined {
  if (specifier === 'm') {
    return (event: LogEvent): string => {
      return event.message.map((msg) => {
        switch (typeof msg) {
          case 'object':
            return inspect(msg);
          case 'symbol':
            return msg.toString();
          default:
            return msg;
        }
      }).join(' ');
    };
  }
}

const debugAppender = new DebugAppender({
  layout: new PatternLayout(
    '%d{HH:mm:ss} [%p] - %m',
    createConverter
  )
});

export const factory = new LogFactory({
  level: Level.WARN,
  appenders: [debugAppender]
});

export * from './clrsole';
export * from './types';
export { Level } from 'base-log-factory';
