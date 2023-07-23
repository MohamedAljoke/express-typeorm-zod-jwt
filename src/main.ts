import log from './utils/logger';
import createServer from './connections/server';
import swaggerDocs from './docs/swagger/swagger';
import config from '../config/config';
import { connectDataBase } from './connections/database';

const app = createServer();

app.listen(config.port, async () => {
  log.info(`Server listening on ${config.port}`);
  swaggerDocs(app, config.port);
  connectDataBase();
});
