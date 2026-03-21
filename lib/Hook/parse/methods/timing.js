"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = start;
exports.stop = stop;
var state_1 = require("../../store/state");
var dispatch_1 = __importDefault(require("../../store/dispatch"));
var actions_1 = require("../../store/actions");
function start(label) {
    (0, dispatch_1.default)((0, actions_1.timeStart)(label));
}
function stop(label) {
    var timing = state_1.state === null || state_1.state === void 0 ? void 0 : state_1.state.timings[label];
    if (timing && !timing.end) {
        (0, dispatch_1.default)((0, actions_1.timeEnd)(label));
        var time = state_1.state.timings[label].time;
        return {
            method: 'log',
            data: ["".concat(label, ": ").concat(time, "ms")],
        };
    }
    return {
        method: 'warn',
        data: ["Timer '".concat(label, "' does not exist")],
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy90aW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxzQkFFQztBQUVELG9CQWVDO0FBdkJELDJDQUF5QztBQUN6QyxrRUFBMkM7QUFDM0MsK0NBQXdEO0FBRXhELFNBQWdCLEtBQUssQ0FBQyxLQUFhO0lBQ2pDLElBQUEsa0JBQVEsRUFBQyxJQUFBLG1CQUFTLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBRUQsU0FBZ0IsSUFBSSxDQUFDLEtBQWE7SUFDaEMsSUFBTSxNQUFNLEdBQUcsYUFBSyxhQUFMLGFBQUssdUJBQUwsYUFBSyxDQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFBLGtCQUFRLEVBQUMsSUFBQSxpQkFBTyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDaEIsSUFBQSxJQUFJLEdBQUssYUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBekIsQ0FBeUI7UUFFckMsT0FBTztZQUNMLE1BQU0sRUFBRSxLQUFLO1lBQ2IsSUFBSSxFQUFFLENBQUMsVUFBRyxLQUFLLGVBQUssSUFBSSxPQUFJLENBQUM7U0FDOUIsQ0FBQTtJQUNILENBQUM7SUFDRCxPQUFPO1FBQ0wsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsQ0FBQyxpQkFBVSxLQUFLLHFCQUFrQixDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDIn0=