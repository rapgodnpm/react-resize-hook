"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResizeObserver = void 0;
var react_1 = __importDefault(require("react"));
var resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));
var useResizeObserver = function (_a) {
    var _b = _a.handleHeight, handleHeight = _b === void 0 ? true : _b, _c = _a.handleWidth, handleWidth = _c === void 0 ? true : _c, props = __rest(_a, ["handleHeight", "handleWidth"]);
    var _d = react_1.default.useState(undefined), width = _d[0], setWidth = _d[1];
    var _e = react_1.default.useState(undefined), height = _e[0], setHeight = _e[1];
    var elementToObserve = props['watchEntirePage'] ? document.body : props['element'];
    react_1.default.useEffect(attachObserverEffect, [elementToObserve]);
    function attachObserverEffect() {
        if (!elementToObserve) {
            return;
        }
        var resizeObserver = new resize_observer_polyfill_1.default(updateWidthAndHeightOnResize);
        resizeObserver.observe(elementToObserve);
        return function () {
            resizeObserver.disconnect();
        };
    }
    function updateWidthAndHeightOnResize(_a) {
        var _b = _a[0].contentRect, contentWidth = _b.width, contentHeight = _b.height;
        handleWidth && contentWidth !== null && setWidth(contentWidth);
        handleHeight && contentHeight !== null && setHeight(contentHeight);
    }
    return {
        width: width,
        height: height,
    };
};
exports.useResizeObserver = useResizeObserver;
//# sourceMappingURL=index.js.map