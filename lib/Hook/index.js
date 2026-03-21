"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hook;
var Methods_1 = __importDefault(require("../definitions/Methods"));
var parse_1 = __importDefault(require("./parse"));
var Transform_1 = require("../Transform");
// import Construct from './construct'
/**
 * Hook a console constructor and forward messages to a callback
 * @argument console The Console constructor to Hook
 * @argument callback The callback to be called once a message is logged
 */
function Hook(console, callback, encode, limit) {
    if (encode === void 0) { encode = true; }
    var TargetConsole = console;
    var Storage = {
        pointers: {},
        src: {
            npm: 'https://npmjs.com/package/console-feed',
            github: 'https://github.com/samdenty/console-feed',
        },
    };
    var _loop_1 = function (method) {
        var NativeMethod = TargetConsole[method];
        // Override
        TargetConsole[method] = function () {
            // Pass back to native method
            NativeMethod.apply(this, arguments);
            // Parse arguments and send to transport
            var args = [].slice.call(arguments);
            // setTimeout to prevent lag
            setTimeout(function () {
                var parsed = (0, parse_1.default)(method, args);
                if (parsed) {
                    var encoded = parsed;
                    if (encode) {
                        encoded = (0, Transform_1.Encode)(parsed, limit);
                    }
                    callback(encoded, parsed);
                }
            });
        };
        // Store native methods
        Storage.pointers[method] = NativeMethod;
    };
    // Override console methods
    for (var _i = 0, Methods_2 = Methods_1.default; _i < Methods_2.length; _i++) {
        var method = Methods_2[_i];
        _loop_1(method);
    }
    TargetConsole.feed = Storage;
    return TargetConsole;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvSG9vay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQW1CQSx1QkErQ0M7QUEzREQsbUVBQTRDO0FBRTVDLGtEQUEyQjtBQUUzQiwwQ0FBcUM7QUFDckMsc0NBQXNDO0FBRXRDOzs7O0dBSUc7QUFDSCxTQUF3QixJQUFJLENBQzFCLE9BQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLE1BQWEsRUFDYixLQUFjO0lBRGQsdUJBQUEsRUFBQSxhQUFhO0lBR2IsSUFBTSxhQUFhLEdBQUcsT0FBd0IsQ0FBQTtJQUM5QyxJQUFNLE9BQU8sR0FBWTtRQUN2QixRQUFRLEVBQUUsRUFBRTtRQUNaLEdBQUcsRUFBRTtZQUNILEdBQUcsRUFBRSx3Q0FBd0M7WUFDN0MsTUFBTSxFQUFFLDBDQUEwQztTQUNuRDtLQUNGLENBQUE7NEJBR1EsTUFBTTtRQUNiLElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxXQUFXO1FBQ1gsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3RCLDZCQUE2QjtZQUM3QixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUVuQyx3Q0FBd0M7WUFDeEMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFckMsNEJBQTRCO1lBQzVCLFVBQVUsQ0FBQztnQkFDVCxJQUFNLE1BQU0sR0FBRyxJQUFBLGVBQUssRUFBQyxNQUF3QixFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNwRCxJQUFJLE1BQU0sRUFBRSxDQUFDO29CQUNYLElBQUksT0FBTyxHQUFZLE1BQWlCLENBQUE7b0JBQ3hDLElBQUksTUFBTSxFQUFFLENBQUM7d0JBQ1gsT0FBTyxHQUFHLElBQUEsa0JBQU0sRUFBQyxNQUFNLEVBQUUsS0FBSyxDQUFZLENBQUE7b0JBQzVDLENBQUM7b0JBQ0QsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtnQkFDM0IsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO1FBRUQsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFBOztJQTFCekMsMkJBQTJCO0lBQzNCLEtBQW1CLFVBQU8sRUFBUCxZQUFBLGlCQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQXJCLElBQUksTUFBTSxnQkFBQTtnQkFBTixNQUFNO0tBMEJkO0lBRUQsYUFBYSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7SUFFNUIsT0FBTyxhQUFhLENBQUE7QUFDdEIsQ0FBQyJ9