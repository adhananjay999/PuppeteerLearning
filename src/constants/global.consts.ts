import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('.env') });

export const username = process.env.USER_NAME || '';
export const password = process.env.PASSWD || ''