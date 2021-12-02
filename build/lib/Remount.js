"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remount = exports.useRemount = void 0;
const react_1 = __importStar(require("react"));
const uuid_1 = require("uuid");
const RemountContext = react_1.createContext({});
const useRemount = () => react_1.useContext(RemountContext);
exports.useRemount = useRemount;
const Remount = (props) => {
    const [key, setKey] = react_1.useState(uuid_1.v4());
    const remount = react_1.useCallback(() => {
        setKey(uuid_1.v4());
    }, []);
    const Children = () => react_1.default.Children.map(props.children, child => react_1.default.cloneElement(child, {
        key: key
    }));
    return (react_1.default.createElement(RemountContext.Provider, { value: { remount } },
        react_1.default.createElement(Children, null)));
};
exports.Remount = Remount;
