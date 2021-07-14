import { Dispatch, SetStateAction } from 'react';
declare type Response<T> = [T, Dispatch<SetStateAction<T>>];
export declare function usePersistedState<T>(key: string, initialState: T | (() => T)): Response<T>;
export {};
