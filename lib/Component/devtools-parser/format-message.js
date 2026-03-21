"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = formatWithSubstitutionString;
var string_utils_1 = require("./string-utils");
function createAppend(s) {
    var container = document.createDocumentFragment();
    container.appendChild(document.createTextNode(s));
    return container;
}
/**
 * @param {string} format
 * @param {!Array.<!SDK.RemoteObject>} parameters
 * @param {!Element} formattedResult
 */
function formatWithSubstitutionString(format, parameters, formattedResult) {
    var formatters = {};
    function stringFormatter(obj) {
        if (typeof obj !== 'string') {
            return '';
        }
        return String(obj);
    }
    function floatFormatter(obj) {
        if (typeof obj !== 'number')
            return 'NaN';
        return obj;
    }
    function integerFormatter(obj) {
        if (typeof obj !== 'number')
            return 'NaN';
        return Math.floor(obj);
    }
    var currentStyle = null;
    function styleFormatter(obj) {
        currentStyle = {};
        var buffer = document.createElement('span');
        buffer.setAttribute('style', obj);
        for (var i = 0; i < buffer.style.length; i++) {
            var property = buffer.style[i];
            if (isWhitelistedProperty(property))
                currentStyle[property] = buffer.style[property];
        }
    }
    function isWhitelistedProperty(property) {
        var prefixes = [
            'background',
            'border',
            'color',
            'font',
            'line',
            'margin',
            'padding',
            'text',
            '-webkit-background',
            '-webkit-border',
            '-webkit-font',
            '-webkit-margin',
            '-webkit-padding',
            '-webkit-text'
        ];
        for (var i = 0; i < prefixes.length; i++) {
            if (property.startsWith(prefixes[i]))
                return true;
        }
        return false;
    }
    formatters.s = stringFormatter;
    formatters.f = floatFormatter;
    // Firebug allows both %i and %d for formatting integers.
    formatters.i = integerFormatter;
    formatters.d = integerFormatter;
    // Firebug uses %c for styling the message.
    formatters.c = styleFormatter;
    function append(a, b) {
        if (b instanceof Node) {
            a.appendChild(b);
        }
        else if (typeof b !== 'undefined') {
            var toAppend = createAppend(String(b));
            if (currentStyle) {
                var wrapper = document.createElement('span');
                wrapper.appendChild(toAppend);
                applyCurrentStyle(wrapper);
                for (var i = 0; i < wrapper.children.length; ++i)
                    applyCurrentStyle(wrapper.children[i]);
                toAppend = wrapper;
            }
            a.appendChild(toAppend);
        }
        return a;
    }
    /**
     * @param {!Element} element
     */
    function applyCurrentStyle(element) {
        for (var key in currentStyle)
            element.style[key] = currentStyle[key];
    }
    // String.format does treat formattedResult like a Builder, result is an object.
    return string_utils_1.String.format(format, parameters, formatters, formattedResult, append);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L2RldnRvb2xzLXBhcnNlci9mb3JtYXQtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWNBLCtDQXVHQztBQXJIRCwrQ0FBc0Q7QUFFdEQsU0FBUyxZQUFZLENBQUMsQ0FBUztJQUM3QixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtJQUNuRCxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVqRCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQXdCLDRCQUE0QixDQUNsRCxNQUFXLEVBQ1gsVUFBZSxFQUNmLGVBQW9CO0lBRXBCLElBQU0sVUFBVSxHQUFRLEVBQUUsQ0FBQTtJQUUxQixTQUFTLGVBQWUsQ0FBQyxHQUFRO1FBQy9CLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDNUIsT0FBTyxFQUFFLENBQUE7UUFDWCxDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEIsQ0FBQztJQUVELFNBQVMsY0FBYyxDQUFDLEdBQVE7UUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFDekMsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFRO1FBQ2hDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFBO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBRUQsSUFBSSxZQUFZLEdBQVEsSUFBSSxDQUFBO0lBQzVCLFNBQVMsY0FBYyxDQUFDLEdBQVE7UUFDOUIsWUFBWSxHQUFH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