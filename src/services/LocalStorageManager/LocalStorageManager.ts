import { StorageKeys } from './types';

class LocalStorageManager {
    public static setValue = (key: StorageKeys, value: string) =>
        localStorage.setItem(key, value);

    public static getValue = (key: StorageKeys) => localStorage.getItem(key);

    public static clear = () => localStorage.clear();
}

export default LocalStorageManager;
