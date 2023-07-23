import jwt from 'jsonwebtoken';
import config from '../../config/config';

const privateKey = config.privateKey || '';
const publicKey = config.publicKey || '';

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  console.log(privateKey);
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: 'RS256',
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    };
  }
}
