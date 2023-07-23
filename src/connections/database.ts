import { DataSource } from 'typeorm';
import config from '../../config/config';

export const myDataSource = new DataSource({
  type: 'mysql',
  host: config.MYSQL_HOST,
  port: 3306,
  username: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DB_NAME,
  entities: ['src/entity/*.[tj]s'],
  migrations: [`src/database/migrations/*.[tj]s`],
  logging: true,
  synchronize: true,
});

export function connectDataBase() {
  myDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err);
    });
}
