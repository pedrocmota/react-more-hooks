"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForceUpdate = void 0;
const react_1 = require("react");
const useForceUpdate = () => {
    const [value, setValue] = react_1.useState(0);
    return () => setValue(value => value + 1);
};
exports.useForceUpdate = useForceUpdate;
