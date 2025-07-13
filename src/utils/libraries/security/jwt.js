import { SignJWT, jwtVerify } from 'jose';
const secret = new TextEncoder().encode(process.env.JWT_SECRET || "NOTION_KEY");

export async function makeJWT(payload, exp = '2d') {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(exp)
    .sign(secret);
}
export async function readJWT(token) {
  const { payload } = await jwtVerify(token, secret);
  return payload;
}