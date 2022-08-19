import { sign } from 'jsonwebtoken';

export const generateJWT = (id = ''): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    sign(
      payload,
      process.env.PRIVATEKEY!,
      { expiresIn: '4h' },
      (error, token) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(token!);
        }
      }
    );
  });
};
