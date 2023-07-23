declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    NODE_ENV: 'development' | 'production' | 'test';
    origin: string;

    DB_CONNECTION: string;
    MYSQL_HOST: string;
    MYSQL_PORT: string;
    MYSQL_USER: string;
    MYSQL_PASSWORD: string;
    MYSQL_DB_NAME: string;

    jwtSecret: string;
    jwtExpiresIn: string;

    accessTokenTtl: string;
    refreshTokenTtl: string;
    privateKey: string;
    publicKey: string;
  }
}
