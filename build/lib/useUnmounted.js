"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUnmonted = void 0;
const react_1 = require("react");
const useUnmonted = (func) => {
    react_1.useEffect(() => {
        return () => void func();
    }, []);
};
exports.useUnmonted = useUnmonted;
exports.default = exports.useUnmonted;
