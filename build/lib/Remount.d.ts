import React from 'react';
interface IRemountContext {
    remount: () => void;
}
interface IRemount {
    children: JSX.Element;
}
export declare const useRemount: () => IRemountContext;
export declare const Remount: React.FunctionComponent<IRemount>;
export {};
