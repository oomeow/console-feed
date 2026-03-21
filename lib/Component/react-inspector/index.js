"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_theming_1 = require("emotion-theming");
var React = __importStar(require("react"));
var react_inspector_1 = require("react-inspector");
var Error_1 = __importDefault(require("../message-parsers/Error"));
var elements_1 = require("./elements");
var REMAINING_KEY = '__console_feed_remaining__';
// copied from react-inspector
function intersperse(arr, sep) {
    if (arr.length === 0) {
        return [];
    }
    return arr.slice(1).reduce(function (xs, x) { return xs.concat([sep, x]); }, [arr[0]]);
}
var getArrayLength = function (array) {
    if (!array || array.length < 1) {
        return 0;
    }
    var remainingKeyCount = array[array.length - 1]
        .toString()
        .split(REMAINING_KEY);
    if (remainingKeyCount[1] === undefined) {
        return array.length;
    }
    else {
        var remaining = parseInt(array[array.length - 1].toString().split(REMAINING_KEY)[1]);
        return array.length - 1 + remaining;
    }
};
var CustomObjectRootLabel = function (_a) {
    var name = _a.name, data = _a.data;
    var rootData = data;
    if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
        var object = {};
        for (var propertyName in data) {
            if (data.hasOwnProperty(propertyName)) {
                var propertyValue = data[propertyName];
                if (Array.isArray(propertyValue)) {
                    var arrayLength = getArrayLength(propertyValue);
                    object[propertyName] = new Array(arrayLength);
                }
                else {
                    object[propertyName] = propertyValue;
                }
            }
        }
        rootData = Object.assign(Object.create(Object.getPrototypeOf(data)), object);
    }
    if (typeof name === 'string') {
        return (React.createElement("span", null,
            React.createElement(react_inspector_1.ObjectName, { name: name }),
            React.createElement("span", null, ": "),
            React.createElement(react_inspector_1.ObjectPreview, { data: rootData })));
    }
    else {
        return React.createElement(react_inspector_1.ObjectPreview, { data: rootData });
    }
};
var CustomObjectLabel = function (_a) {
    var name = _a.name, data = _a.data, _b = _a.isNonenumerable, isNonenumerable = _b === void 0 ? false : _b;
    return name === REMAINING_KEY ? (data > 0 ? (React.createElement("span", null,
        data,
        " more...")) : null) : (React.createElement("span", null,
        typeof name === 'string' ? (React.createElement(react_inspector_1.ObjectName, { name: name, dimmed: isNonenumerable })) : (React.createElement(react_inspector_1.ObjectPreview, { data: name })),
        React.createElement("span", null, ": "),
        React.createElement(react_inspector_1.ObjectValue, { object: data })));
};
var CustomInspector = /** @class */ (function (_super) {
    __extends(CustomInspector, _super);
    function CustomInspector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomInspector.prototype.render = function () {
        var _a = this.props, data = _a.data, theme = _a.theme;
        var styles = theme.styles, method = theme.method;
        var dom = data instanceof HTMLElement;
        var table = method === 'table';
        return (React.createElement(elements_1.Root, { "data-type": table ? 'table' : dom ? 'html' : 'object' }, table ? (React.createElement(elements_1.Table, null,
            React.createElement(react_inspector_1.TableInspector, __assign({}, this.props, { theme: __assign({}, styles) })))) : dom ? (React.createElement(elements_1.HTML, null,
            React.createElement(react_inspector_1.ObjectInspector, __assign({}, this.props, { theme: __assign({}, styles) })))) : (React.createElement(react_inspector_1.ObjectInspector, __assign({}, this.props, { theme: __assign({}, styles), nodeRenderer: this.nodeRenderer.bind(this) })))));
    };
    CustomInspector.prototype.getCustomNode = function (data) {
        var _a;
        var styles = this.props.theme.styles;
        var constructor = (_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name;
        if (constructor === 'Function')
            return (React.createElement("span", { style: { fontStyle: 'italic' } },
                React.createElement(react_inspector_1.ObjectPreview, { data: data }), " {",
                React.createElement("span", { style: { color: 'rgb(181, 181, 181)' } }, data.body), "}"));
        if (data instanceof Error && typeof data.stack === 'string') {
            return React.createElement(Error_1.default, { error: data.stack });
        }
        if (constructor === 'Promise')
            return (React.createElement("span", { style: { fontStyle: 'italic' } },
                "Promise ", "{",
                React.createElement("span", { style: { opacity: 0.6 } }, "<pending>"), "}"));
        if (data instanceof HTMLElement)
            return (React.createElement(elements_1.HTML, null,
                React.createElement(react_inspector_1.ObjectInspector, __assign({}, this.props, { theme: __assign({}, styles) }))));
        if (Array.isArray(data)) {
            var arrayLength = getArrayLength(data);
            var maxProperties = styles.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES;
            if (typeof data[data.length - 1] === 'string' &&
                data[data.length - 1].includes(REMAINING_KEY)) {
                data = data.slice(0, -1);
            }
            var previewArray = data
                .slice(0, maxProperties)
                .map(function (element, index) {
                if (Array.isArray(element)) {
                    return (React.createElement(react_inspector_1.ObjectValue, { key: index, object: new Array(getArrayLength(element)) }));
                }
                else {
                    return React.createElement(react_inspector_1.ObjectValue, { key: index, object: element });
                }
            });
            if (arrayLength > maxProperties) {
                previewArray.push(React.createElement("span", { key: "ellipsis" }, "\u2026"));
            }
            return (React.createElement(React.Fragment, null,
                React.createElement("span", { style: styles.objectDescription }, arrayLength === 0 ? "" : "(".concat(arrayLength, ")\u00A0")),
                React.createElement("span", { style: styles.preview },
                    "[",
                    intersperse(previewArray, ', '),
                    "]")));
        }
        return null;
    };
    CustomInspector.prototype.nodeRenderer = function (props) {
        var depth = props.depth, name = props.name, data = props.data, isNonenumerable = props.isNonenumerable;
        // Root
        if (depth === 0) {
            var customNode_1 = this.getCustomNode(data);
            return customNode_1 || React.createElement(CustomObjectRootLabel, { name: name, data: data });
        }
        if (typeof data === 'string' && data.includes(REMAINING_KEY)) {
            name = REMAINING_KEY;
            data = data.split(REMAINING_KEY)[1];
        }
        if (name === 'constructor')
            return (React.createElement(elements_1.Constructor, null,
                React.createElement(react_inspector_1.ObjectLabel, { name: "<constructor>", data: data.name, isNonenumerable: isNonenumerable })));
        var customNode = this.getCustomNode(data);
        return customNode ? (React.createElement(elements_1.Root, null,
            React.createElement(react_inspector_1.ObjectName, { name: name }),
            React.createElement("span", null, ": "),
            customNode)) : (React.createElement(CustomObjectLabel, { name: name, data: data, isNonenumerable: isNonenumerable }));
    };
    return CustomInspector;
}(React.PureComponent));
exports.default = (0, emotion_theming_1.withTheme)(CustomInspector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQTJDO0FBQzNDLDJDQUE4QjtBQUM5QixtREFPd0I7QUFHeEIsbUVBQWlEO0FBQ2pELHVDQUEyRDtBQU8zRCxJQUFNLGFBQWEsR0FBRyw0QkFBNEIsQ0FBQTtBQUVsRCw4QkFBOEI7QUFDOUIsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUc7SUFDM0IsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztJQUVELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLEVBQUUsQ0FBQyxJQUFLLE9BQUEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN0RSxDQUFDO0FBRUQsSUFBTSxjQUFjLEdBQUcsVUFBQyxLQUFpQjtJQUN2QyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLENBQUE7SUFDVixDQUFDO0lBRUQsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDOUMsUUFBUSxFQUFFO1NBQ1YsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBRXZCLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFBO0lBQ3JCLENBQUM7U0FBTSxDQUFDO1FBQ04sSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNELENBQUE7UUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtJQUNyQyxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLEVBQWM7UUFBWixJQUFJLFVBQUEsRUFBRSxJQUFJLFVBQUE7SUFDekMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFBO0lBQ25CLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdEUsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLEtBQUssSUFBTSxZQUFZLElBQUksSUFBSSxFQUFFLENBQUM7WUFDaEMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDdEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7b0JBQ2pDLElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtvQkFDakQsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUMvQyxDQUFDO3FCQUFNLENBQUM7b0JBQ04sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLGFBQWEsQ0FBQTtnQkFDdEMsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0QsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDOUUsQ0FBQztJQUNELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDN0IsT0FBTyxDQUNMO1lBQ0Usb0JBQUMsNEJBQVUsSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJO1lBQzFCLHVDQUFlO1lBQ2Ysb0JBQUMsK0JBQWEsSUFBQyxJQUFJLEVBQUUsUUFBUSxHQUFJLENBQzVCLENBQ1IsQ0FBQTtJQUNILENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxvQkFBQywrQkFBYSxJQUFDLElBQUksRUFBRSxRQUFRLEdBQUksQ0FBQTtJQUMxQyxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLEVBQXVDO1FBQXJDLElBQUksVUFBQSxFQUFFLElBQUksVUFBQSxFQUFFLHVCQUF1QixFQUF2QixlQUFlLG1CQUFHLEtBQUssS0FBQTtJQUM5RCxPQUFBLElBQUksS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3ZCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ1Q7UUFBTyxJQUFJO21CQUFnQixDQUM1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FDRjtRQUNHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDMUIsb0JBQUMsNEJBQVUsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxlQUFlLEdBQUksQ0FDcEQsQ0FBQyxDQUFDLENBQUMsQ0FDRixvQkFBQywrQkFBYSxJQUFDLElBQUksRUFBRSxJQUFJLEdBQUksQ0FDOUI7UUFDRCx1Q0FBZTtRQUVmLG9CQUFDLDZCQUFXLElBQUMsTUFBTSxFQUFFLElBQUksR0FBSSxDQUN4QixDQUNSO0FBZkQsQ0FlQyxDQUFBO0FBRUg7SUFBOEIsbUNBQStCO0lBQTdEOztJQW9KQSxDQUFDO0lBbkpDLGdDQUFNLEdBQU47UUFDUSxJQUFBLEtBQWtCLElBQUksQ0FBQyxLQUFLLEVBQTFCLElBQUksVUFBQSxFQUFFLEtBQUssV0FBZSxDQUFBO1FBQzFCLElBQUEsTUFBTSxHQUFhLEtBQUssT0FBbEIsRUFBRSxNQUFNLEdBQUssS0FBSyxPQUFWLENBQVU7UUFFaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxZQUFZLFdBQVcsQ0FBQTtRQUN2QyxJQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssT0FBTyxDQUFBO1FBRWhDLE9BQU8sQ0FDTCxvQkFBQyxlQUFJLGlCQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUN2RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1Asb0JBQUMsZ0JBQUs7WUFDSixvQkFBQyxnQ0FBYyxlQUFLLElBQUksQ0FBQyxLQUFLLElBQUUsS0FBSyxFQUFFLGFBQUssTUFBTSxDQUFTLElBQUksQ0FDekQsQ0FDVCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQ1Isb0JBQUMsZUFBSTtZQUNILG9CQUFDLGlDQUFlLGVBQUssSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUUsYUFBSyxNQUFNLENBQVMsSUFBSSxDQUMzRCxDQUNSLENBQUMsQ0FBQyxDQUFDLENBQ0Ysb0JBQUMsaUNBQWUsZUFDVixJQUFJLENBQUMsS0FBSyxJQUNkLEtBQUssRUFBRSxhQUFLLE1BQU0sQ0FBUyxFQUMzQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQzFDLENBQ0gsQ0FDSSxDQUNSLENBQUE7SUFDSCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLElBQVM7O1FBQ2IsSUFBQSxNQUFNLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLE9BQXJCLENBQXFCO1FBQ25DLElBQU0sV0FBVyxHQUFHLE1BQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFdBQVcsMENBQUUsSUFBSSxDQUFBO1FBRTNDLElBQUksV0FBVyxLQUFLLFVBQVU7WUFDNUIsT0FBTyxDQUNMLDhCQUFNLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7Z0JBQ2xDLG9CQUFDLCtCQUFhLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSSxFQUM1QixJQUFJO2dCQUNMLDhCQUFNLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQVEsRUFDL0QsR0FBRyxDQUNDLENBQ1IsQ0FBQTtRQUVILElBQUksSUFBSSxZQUFZLEtBQUssSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDNUQsT0FBTyxvQkFBQyxlQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUksQ0FBQTtRQUMxQyxDQUFDO1FBRUQsSUFBSSxXQUFXLEtBQUssU0FBUztZQUMzQixPQUFPLENBQ0wsOEJBQU0sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRTs0QkFDekIsR0FBRztnQkFDWiw4QkFBTSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUcsV0FBVyxDQUFRLEVBQ2xELEdBQUcsQ0FDQyxDQUNSLENBQUE7UUFFSCxJQUFJLElBQUksWUFBWSxXQUFXO1lBQzdCLE9BQU8sQ0FDTCxvQkFBQyxlQUFJO2dCQUNILG9CQUFDLGlDQUFlLGVBQUssSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUUsYUFBSyxNQUFNLENBQVMsSUFBSSxDQUMzRCxDQUNSLENBQUE7UUFFSCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN4QixJQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLG1DQUFtQyxDQUFBO1lBRWhFLElBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRO2dCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQzdDLENBQUM7Z0JBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDMUIsQ0FBQztZQUVELElBQU0sWUFBWSxHQUFHLElBQUk7aUJBQ3RCLEtBQUssQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDO2lCQUN2QixHQUFHLENBQUMsVUFBQyxPQUFPLEVBQUUsS0FBSztnQkFDbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBQzNCLE9BQU8sQ0FDTCxvQkFBQyw2QkFBVyxJQUNWLEdBQUcsRUFBRSxLQUFLLEVBQ1YsTUFBTSxFQUFFLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUMxQyxDQUNILENBQUE7Z0JBQ0gsQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sb0JBQUMsNkJBQVcsSUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUksQ0FBQTtnQkFDckQsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFBO1lBQ0osSUFBSSxXQUFXLEdBQUcsYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsOEJBQU0sR0FBRyxFQUFDLFVBQVUsYUFBUyxDQUFDLENBQUE7WUFDbEQsQ0FBQztZQUNELE9BQU8sQ0FDTCxvQkFBQyxLQUFLLENBQUMsUUFBUTtnQkFDYiw4QkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixJQUNsQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQUksV0FBVyxZQUFPLENBQzNDO2dCQUNQLDhCQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTzs7b0JBQ3ZCLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO3dCQUU1QixDQUNRLENBQ2xCLENBQUE7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEtBQVU7UUFDZixJQUFBLEtBQUssR0FBa0MsS0FBSyxNQUF2QyxFQUFFLElBQUksR0FBNEIsS0FBSyxLQUFqQyxFQUFFLElBQUksR0FBc0IsS0FBSyxLQUEzQixFQUFFLGVBQWUsR0FBSyxLQUFLLGdCQUFWLENBQVU7UUFFbEQsT0FBTztRQUNQLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hCLElBQU0sWUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDM0MsT0FBTyxZQUFVLElBQUksb0JBQUMscUJBQXFCLElBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFJLENBQUE7UUFDeEUsQ0FBQztRQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEdBQUcsYUFBYSxDQUFBO1lBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3JDLENBQUM7UUFFRCxJQUFJLElBQUksS0FBSyxhQUFhO1lBQ3hCLE9BQU8sQ0FDTCxvQkFBQyxzQkFBVztnQkFDVixvQkFBQyw2QkFBVyxJQUNWLElBQUksRUFBQyxlQUFlLEVBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNmLGVBQWUsRUFBRSxlQUFlLEdBQ2hDLENBQ1UsQ0FDZixDQUFBO1FBRUgsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUUzQyxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDbEIsb0JBQUMsZUFBSTtZQUNILG9CQUFDLDRCQUFVLElBQUMsSUFBSSxFQUFFLElBQUksR0FBSTtZQUMxQix1Q0FBZTtZQUNkLFVBQVUsQ0FDTixDQUNSLENBQUMsQ0FBQyxDQUFDLENBQ0Ysb0JBQUMsaUJBQWlCLElBQ2hCLElBQUksRUFBRSxJQUFJLEVBQ1YsSUFBSSxFQUFFLElBQUksRUFDVixlQUFlLEVBQUUsZUFBZSxHQUNoQyxDQUNILENBQUE7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBcEpELENBQThCLEtBQUssQ0FBQyxhQUFhLEdBb0poRDtBQUVELGtCQUFlLElBQUEsMkJBQVMsRUFBQyxlQUFlLENBQUMsQ0FBQSJ9