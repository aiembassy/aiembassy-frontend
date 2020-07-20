import { EnvType } from '@@types/CommonTypes';

export const __DEV__ = process.env.NODE_ENV !== EnvType.production;
export const API_URL = '/api';
