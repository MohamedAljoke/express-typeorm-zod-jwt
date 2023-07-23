import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { version } from '../../../package.json';
import log from '../../utils/logger';
import config from '../../../config/config';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version,
      description: `APP server version ${version}`,
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
        description: 'local API',
      },
    ],
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['src/**/*.ts', 'src/docs/swagger/**/*.yml', 'src/routes/index.ts'],
};
const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: string) {
  //swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  log.info(`Docs on ${port}`);
}
export default swaggerDocs;
