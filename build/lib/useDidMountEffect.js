"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDidMountEffect = void 0;
const react_1 = require("react");
const useDidMountEffect = (func, deps) => {
    const didMount = react_1.useRef(false);
    react_1.useEffect(() => {
        if (didMount.current) {
            func();
        }
        else {
            didMount.current = true;
        }
    }, deps);
};
exports.useDidMountEffect = useDidMountEffect;
