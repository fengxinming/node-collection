import { clrsole, factory } from './src';

const appLogger = factory.getLogger('app');
appLogger.level = 'TRACE';

appLogger.trace('message', new Error('error'), {
  a: 1,
  b:
   {
     c: 1,
     d: {
       e: 1,
       f: {
         g: 1
       }
     }
   }
});
appLogger.debug('message', 'message2');
appLogger.info(NaN, 0, BigInt('9007199254740991'), Infinity);
appLogger.warn('message', 'message2', null, undefined);
appLogger.error(true, false);
appLogger.fatal('message', Symbol('message2'));

clrsole.red('red message');
clrsole.green('green message');

process.exit(0);
