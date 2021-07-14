import { useState, useCallback, useEffect, useRef, } from 'react';
export function useStateCallback(initialState) {
    const [state, custumSetState] = useState(initialState);
    const callbackRef = useRef();
    const isFirstCallbackCall = useRef(true);
    const setState = useCallback((setStateAction, callback) => {
        callbackRef.current = callback;
        custumSetState(setStateAction);
    }, []);
    useEffect(() => {
        var _a;
        if (isFirstCallbackCall.current) {
            isFirstCallbackCall.current = false;
            return;
        }
        (_a = callbackRef.current) === null || _a === void 0 ? void 0 : _a.call(callbackRef, state);
    }, [state]);
    return [state, setState];
}
