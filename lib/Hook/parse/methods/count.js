"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.increment = increment;
var state_1 = require("../../store/state");
var dispatch_1 = __importDefault(require("../../store/dispatch"));
var actions_1 = require("../../store/actions");
function increment(label) {
    (0, dispatch_1.default)((0, actions_1.count)(label));
    var times = state_1.state.count[label];
    return {
        method: 'log',
        data: ["".concat(label, ": ").concat(times)]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9tZXRob2RzL2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsOEJBUUM7QUFaRCwyQ0FBeUM7QUFDekMsa0VBQTJDO0FBQzNDLCtDQUEyQztBQUUzQyxTQUFnQixTQUFTLENBQUMsS0FBYTtJQUNyQyxJQUFBLGtCQUFRLEVBQUMsSUFBQSxlQUFLLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN0QixJQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhDLE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxDQUFDLFVBQUcsS0FBSyxlQUFLLEtBQUssQ0FBRSxDQUFDO0tBQzdCLENBQUE7QUFDSCxDQUFDIn0=