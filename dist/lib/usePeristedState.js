import { useState, useEffect } from 'react';
export function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);
        const inicial = typeof initialState == 'function' ? initialState() : initialState;
        return storageValue ? JSON.parse(storageValue) : inicial;
    });
    useEffect(() => {
        if (state != undefined && state != null)
            localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}
