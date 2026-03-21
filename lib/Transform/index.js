"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encode = Encode;
exports.Decode = Decode;
var arithmetic_1 = __importDefault(require("./arithmetic"));
var BigInt_1 = __importDefault(require("./BigInt"));
var Function_1 = __importDefault(require("./Function"));
var HTML_1 = __importDefault(require("./HTML"));
var Map_1 = __importDefault(require("./Map"));
var replicator_1 = __importDefault(require("./replicator"));
var transforms = [HTML_1.default, Function_1.default, arithmetic_1.default, Map_1.default, BigInt_1.default];
var replicator = new replicator_1.default();
replicator.addTransforms(transforms);
function Encode(data, limit) {
    return JSON.parse(replicator.encode(data, limit));
}
function Decode(data) {
    var decoded = replicator.decode(JSON.stringify(data));
    // remove __console_feed_remaining__
    decoded.data.pop();
    return decoded;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVHJhbnNmb3JtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBY0Esd0JBRUM7QUFFRCx3QkFLQztBQXRCRCw0REFBcUM7QUFDckMsb0RBQTZCO0FBQzdCLHdEQUFpQztBQUNqQyxnREFBeUI7QUFDekIsOENBQXVCO0FBRXZCLDREQUFxQztBQUVyQyxJQUFNLFVBQVUsR0FBRyxDQUFDLGNBQUksRUFBRSxrQkFBUSxFQUFFLG9CQUFVLEVBQUUsYUFBRyxFQUFFLGdCQUFNLENBQUMsQ0FBQTtBQUU1RCxJQUFNLFVBQVUsR0FBRyxJQUFJLG9CQUFVLEVBQUUsQ0FBQTtBQUNuQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBRXBDLFNBQWdCLE1BQU0sQ0FBSSxJQUFTLEVBQUUsS0FBYztJQUNqRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUNuRCxDQUFDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLElBQVM7SUFDOUIsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDdkQsb0NBQW9DO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDbEIsT0FBTyxPQUFPLENBQUE7QUFDaEIsQ0FBQyJ9