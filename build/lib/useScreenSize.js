"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScreenSize = void 0;
const useScreenSize = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const size = {
        width: width,
        height: height,
    };
    return size;
};
exports.useScreenSize = useScreenSize;
