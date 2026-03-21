"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.Timestamp = exports.AmountIcon = exports.Icon = exports.IconContainer = exports.Message = exports.Root = void 0;
var theme_1 = __importDefault(require("./theme"));
/**
 * Return themed log-method style
 * @param style The style
 * @param type The method
 */
var Themed = function (style, method, styles) {
    return styles["LOG_".concat(method.toUpperCase(), "_").concat(style.toUpperCase())] ||
        styles["LOG_".concat(style.toUpperCase())];
};
/**
 * console-feed
 */
exports.Root = (0, theme_1.default)('div')({
    wordBreak: 'break-word',
    width: '100%',
});
/**
 * console-message
 */
exports.Message = (0, theme_1.default)('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        position: 'relative',
        display: 'flex',
        color: Themed('color', method, styles),
        backgroundColor: Themed('background', method, styles),
        borderTop: "1px solid ".concat(Themed('border', method, styles)),
        borderBottom: "1px solid ".concat(Themed('border', method, styles)),
        marginTop: -1,
        marginBottom: +/^warn|error$/.test(method),
        padding: styles.PADDING,
        boxSizing: 'border-box',
        '& *': {
            boxSizing: 'border-box',
            fontFamily: styles.BASE_FONT_FAMILY,
            whiteSpace: 'pre-wrap',
            fontSize: styles.BASE_FONT_SIZE,
        },
        '& a': {
            color: styles.LOG_LINK_COLOR,
        },
    });
});
/**
 * Icon container
 */
exports.IconContainer = (0, theme_1.default)('div')(function () { return ({
    paddingLeft: 10,
}); });
/**
 * message-icon
 */
exports.Icon = (0, theme_1.default)('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        width: styles.LOG_ICON_WIDTH,
        height: styles.LOG_ICON_HEIGHT,
        backgroundImage: Themed('icon', method, styles),
        backgroundRepeat: 'no-repeat',
        backgroundSize: styles.LOG_ICON_BACKGROUND_SIZE,
        backgroundPosition: 'center',
    });
});
/**
 * message-amount
 */
exports.AmountIcon = (0, theme_1.default)('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        // make it a circle if the amount is one digit
        minWidth: "".concat(16 / 12, "em"),
        height: "".concat(16 / 12, "em"),
        margin: '1px 0',
        whiteSpace: 'nowrap',
        fontSize: "".concat(10 / 12, "em!important"),
        padding: '0px 3px',
        background: Themed('amount_background', method, styles),
        color: Themed('amount_color', method, styles),
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    });
});
/**
 * timestamp
 */
exports.Timestamp = (0, theme_1.default)('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        marginLeft: 5,
        color: 'dimgray',
    });
});
/**
 * console-content
 */
exports.Content = (0, theme_1.default)('div')(function (_a) {
    var styles = _a.theme.styles;
    return ({
        clear: 'right',
        position: 'relative',
        marginLeft: 15,
        flex: 1,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2VsZW1lbnRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBNEI7QUFFNUI7Ozs7R0FJRztBQUNILElBQU0sTUFBTSxHQUFHLFVBQ2IsS0FBYSxFQUNiLE1BQWMsRUFDZCxNQUFrQztJQUVsQyxPQUFBLE1BQU0sQ0FBQyxjQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztRQUM1RCxNQUFNLENBQUMsY0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztBQURwQyxDQUNvQyxDQUFBO0FBRXRDOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsSUFBQSxlQUFNLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsU0FBUyxFQUFFLFlBQVk7SUFDdkIsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsT0FBTyxHQUFHLElBQUEsZUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBNkI7UUFBM0IsYUFBeUIsRUFBaEIsTUFBTSxZQUFBLEVBQUUsTUFBTSxZQUFBO0lBQVMsT0FBQSxDQUFDO1FBQ3ZFLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUN0QyxlQUFlLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3JELFNBQVMsRUFBRSxvQkFBYSxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBRTtRQUMxRCxZQUFZLEVBQUUsb0JBQWEsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUU7UUFDN0QsU0FBUyxF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