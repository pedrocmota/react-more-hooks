"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateCallback = void 0;
const react_1 = require("react");
function useStateCallback(initialState) {
    const [state, custumSetState] = react_1.useState(initialState);
    const callbackRef = react_1.useRef();
    const isFirstCallbackCall = react_1.useRef(true);
    const setState = react_1.useCallback((setStateAction, callback) => {
        callbackRef.current = callback;
        custumSetState(setStateAction);
    }, []);
    react_1.useEffect(() => {
        var _a;
        if (isFirstCallbackCall.current) {
            isFirstCallbackCall.current = false;
            return;
        }
        (_a = callbackRef.current) === null || _a === void 0 ? void 0 : _a.call(callbackRef, state);
    }, [state]);
    return [state, setState];
}
exports.useStateCallback = useStateCallback;
