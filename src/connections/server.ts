import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import api from '../routes';
import config from '../../config/config';

function createServer() {
  const app = express();
  app.use(cookieParser());
  app.use(express.json());
  app.use(
    cors({
      origin: config.origin,
      credentials: true,
    })
  );
  app.use(helmet());

  app.use('/api/v1', api);
  return app;
}

export default createServer;
