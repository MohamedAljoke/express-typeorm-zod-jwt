import * as dotenv from 'dotenv';
dotenv.config();
const {
  NODE_ENV,
  PORT,
  origin,
  privateKey,
  publicKey,
  DB_CONNECTION,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB_NAME,
  jwtSecret,
  jwtExpiresIn,
} = process.env as NodeJS.ProcessEnv;

const config = {
  NODE_ENV: NODE_ENV,
  port: PORT,
  origin: origin,
  //token
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQDiNiF30hj5RLqO4welNsLKn7aiIR6NjeUblkT3FmmhvI+rxUCw
NiaEY0g9psFmplXHFvSQiC8ZlmntASpAWhtaarwqiYI8LW6nlaKisKmNrM7w6Ln+
WWoB66Xak95kkLXukLgiJwoDM3DwI/7eMobAdP2BHoz2HYzViD+TS80xUQIDAQAB
AoGBAM5Uc2h4MSFECCoGeFXAwiHRVeNB9D1HPL9R7Cu3vLeyZxVVAPD5I17DtAPP
0z4O39SNYptmLBfZs1pjIqe5yJGT6KtWsLBbp+zCi4rE9wcWIUQDVcvTcE5ZEsUO
aqUieciehcqDWuISlnx0g248fgORrTZshJf8Lw5sPZdk8gwBAkEA+JxQNm+iUZLo
2CrpLqkospePt8k3uKZld2DxiuLBLItJSCkxEjott/ZXw+EdRwutm6ol9EjSePe8
DEBuusSiwQJBAOjvYalCcQkncB5RJ4Mq0mAVqqKJcNRnJq1eTRnkUk3n89rMW6yW
1c5I1wiwEbLBweWF+c9uuAOTALVWCtSHgpECQQCF1hi0hXp7sbvaC5fGv9gh9Mew
6AkwRZvgHXdLDnFyGnXT/CDnsBxGqb5ru/e39Ih8gae3D7EG4E8CxXkW4J7BAkEA
gVbaXYedCD4zzUG2tOiEJAIj21iBpA8atM1V9niHEucmymkKxkyCr6ZWcGaDjUR1
C6NW0M1js+heTlJWdShBYQJAX7BCUpFYo3LFOnFgUeCV/k9ZfTh9wCYnAugEgZwj
qDvVdlnP/L6DX6FRgulWiMzZRi7NSAe5MgW5erBn23ehzg==
-----END RSA PRIVATE KEY-----`,
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDiNiF30hj5RLqO4welNsLKn7ai
IR6NjeUblkT3FmmhvI+rxUCwNiaEY0g9psFmplXHFvSQiC8ZlmntASpAWhtaarwq
iYI8LW6nlaKisKmNrM7w6Ln+WWoB66Xak95kkLXukLgiJwoDM3DwI/7eMobAdP2B
Hoz2HYzViD+TS80xUQIDAQAB
-----END PUBLIC KEY-----`,
  //database
  DB_CONNECTION: DB_CONNECTION,
  MYSQL_HOST: MYSQL_HOST,
  MYSQL_PORT: MYSQL_PORT,
  MYSQL_USER: MYSQL_USER,
  MYSQL_PASSWORD: MYSQL_PASSWORD,
  MYSQL_DB_NAME: MYSQL_DB_NAME,

  //jwt
  jwtSecret: jwtSecret,
  jwtExpiresIn: jwtExpiresIn,
};

export default config;
