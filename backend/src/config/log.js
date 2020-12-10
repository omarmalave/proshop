import pino from 'pino';

const log = pino({
  prettyPrint: process.env.NODE_ENV === 'dev',
});

export default log;
