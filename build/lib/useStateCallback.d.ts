import { SetStateAction } from 'react';
declare type Callback<T> = (value?: T) => void;
declare type DispatchWithCallback<T> = (value: T, callback?: Callback<T>) => void;
export declare function useStateCallback<T>(initialState: T | (() => T)): [T, DispatchWithCallback<SetStateAction<T>>];
export {};
