"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePersistedState = void 0;
const react_1 = require("react");
function usePersistedState(key, initialState) {
    const [state, setState] = react_1.useState(() => {
        const storageValue = localStorage.getItem(key);
        const inicial = typeof initialState == 'function' ? initialState() : initialState;
        return storageValue ? JSON.parse(storageValue) : inicial;
    });
    react_1.useEffect(() => {
        if (state != undefined && state != null)
            localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
}
exports.usePersistedState = usePersistedState;
