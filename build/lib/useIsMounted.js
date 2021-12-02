"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsMounted = void 0;
const react_1 = require("react");
const useIsMounted = () => {
    const isMountedRef = react_1.useRef(true);
    const isMounted = react_1.useCallback(() => isMountedRef.current, []);
    react_1.useEffect(() => {
        return () => void (isMountedRef.current = false);
    }, []);
    return isMounted;
};
exports.useIsMounted = useIsMounted;
