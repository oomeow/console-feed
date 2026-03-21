"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GUID_1 = __importDefault(require("./GUID"));
var Timing = __importStar(require("./methods/timing"));
var Count = __importStar(require("./methods/count"));
var Assert = __importStar(require("./methods/assert"));
/**
 * Parses a console log and converts it to a special Log object
 * @argument method The console method to parse
 * @argument data The arguments passed to the console method
 */
function Parse(method, data, staticID) {
    // Create an ID
    var id = staticID || (0, GUID_1.default)();
    // Parse the methods
    switch (method) {
        case 'clear': {
            return {
                method: method,
                id: id
            };
        }
        case 'count': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            return __assign(__assign({}, Count.increment(label)), { id: id });
        }
        case 'time':
        case 'timeEnd': {
            var label = typeof data[0] === 'string' ? data[0] : 'default';
            if (!label)
                return false;
            if (method === 'time') {
                Timing.start(label);
                return false;
            }
            return __assign(__assign({}, Timing.stop(label)), { id: id });
        }
        case 'assert': {
            var valid = data.length !== 0;
            if (valid) {
                var assertion = Assert.test.apply(Assert, __spreadArray([data[0]], data.slice(1), false));
                if (assertion) {
                    return __assign(__assign({}, assertion), { id: id });
                }
            }
            return false;
        }
        case 'error': {
            var errors = data.map(function (error) {
                try {
                    return error.stack || error;
                }
                catch (e) {
                    return error;
                }
            });
            return {
                method: method,
                id: id,
                data: errors
            };
        }
        default: {
            return {
                method: method,
                id: id,
                data: data
            };
        }
    }
}
exports.default = Parse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxnREFBeUI7QUFFekIsdURBQTBDO0FBQzFDLHFEQUF3QztBQUN4Qyx1REFBMEM7QUFFMUM7Ozs7R0FJRztBQUNILFNBQVMsS0FBSyxDQUNaLE1BQWUsRUFDZixJQUFXLEVBQ1gsUUFBaUI7SUFFakIsZUFBZTtJQUNmLElBQU0sRUFBRSxHQUFHLFFBQVEsSUFBSSxJQUFBLGNBQUksR0FBRSxDQUFBO0lBRTdCLG9CQUFvQjtJQUNwQixRQUFRLE1BQU0sRUFBRSxDQUFDO1FBQ2YsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTztnQkFDTCxNQUFNLFFBQUE7Z0JBQ04sRUFBRSxJQUFBO2FBQ0gsQ0FBQTtRQUNILENBQUM7UUFFRCxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1lBQy9ELElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sS0FBSyxDQUFBO1lBRXhCLDZCQUNLLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQ3pCLEVBQUUsSUFBQSxJQUNIO1FBQ0gsQ0FBQztRQUVELEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBTSxLQUFLLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtZQUMvRCxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLEtBQUssQ0FBQTtZQUV4QixJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUUsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkIsT0FBTyxLQUFLLENBQUE7WUFDZCxDQUFDO1lBRUQsNkJBQ0ssTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FDckIsRUFBRSxJQUFBLElBQ0g7UUFDSCxDQUFDO1FBRUQsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUE7WUFFL0IsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0saUJBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQUMsQ0FBQTtnQkFDeEQsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDZCw2QkFDSyxTQUFTLEtBQ1osRUFBRSxJQUFBLElBQ0g7Z0JBQ0gsQ0FBQztZQUNILENBQUM7WUFFRCxPQUFPLEtBQUssQ0FBQTtRQUNkLENBQUM7UUFFRCxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDM0IsSUFBSSxDQUFDO29CQUNILE9BQU8sS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUE7Z0JBQzdCLENBQUM7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDWCxPQUFPLEtBQUssQ0FBQTtnQkFDZCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFBO1FBQ0gsQ0FBQztRQUVELE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDUixPQUFPO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixFQUFFLElBQUE7Z0JBQ0YsSUFBSSxNQUFBO2FBQ0wsQ0FBQTtRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGtCQUFlLEtBQUssQ0FBQSJ9