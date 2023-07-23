import logger from 'pino';
import { DateTime } from 'luxon';

const log = logger({
  transport: {
    target: 'pino-pretty',
  },
  base: {
    pid: false,
  },
  timestamp: () => {
    const currentTime = DateTime.local();
    return `, "time":"${currentTime.toISO()}"`;
  },
});

export default log;
