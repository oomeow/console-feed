"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constructor = exports.HTML = exports.Table = exports.Root = void 0;
var theme_1 = __importDefault(require("../theme"));
/**
 * Object root
 */
exports.Root = (0, theme_1.default)('div')({
    display: 'inline-block',
    wordBreak: 'break-all',
    '&::after': {
        content: "' '",
        display: 'inline-block',
    },
    '& > li, & > ol, & > details': {
        backgroundColor: 'transparent !important',
        display: 'inline-block',
    },
    '& ol:empty': {
        paddingLeft: '0 !important',
    },
});
/**
 * Table
 */
exports.Table = (0, theme_1.default)('span')({
    '& > li': {
        display: 'inline-block',
        marginTop: 5,
    },
    // override react-inspector/TableInspectorHeaderContainer.base
    '& div[style*="height: 17px"]': {
        height: "".concat(17 / 12, "em!important"),
    },
    // override react-inspector/TableInspectorDataContainer.td
    '& td[style*="height: 16px"]': {
        height: "".concat(16 / 12, "em!important"),
        lineHeight: "1!important",
        verticalAlign: 'middle!important',
    },
    '& table[style*="background-size: 128px 32px"]': {
        // = td's fontSize * 2
        backgroundSize: "128px ".concat((16 / 12) * 2, "em!important"),
    },
});
/**
 * HTML
 */
exports.HTML = (0, theme_1.default)('span')({
    display: 'inline-block',
    '& div:hover': {
        backgroundColor: 'rgba(255, 220, 158, .05) !important',
        borderRadius: '2px',
    },
});
/**
 * Object constructor
 */
exports.Constructor = (0, theme_1.default)('span')({
    '& > span > span:nth-child(1)': {
        opacity: 0.6,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L3JlYWN0LWluc3BlY3Rvci9lbGVtZW50cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbURBQTZCO0FBRTdCOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsSUFBQSxlQUFNLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsT0FBTyxFQUFFLGNBQWM7SUFDdkIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLEtBQUs7UUFDZCxPQUFPLEVBQUUsY0FBYztLQUN4QjtJQUNELDZCQUE2QixFQUFFO1FBQzdCLGVBQWUsRUFBRSx3QkFBd0I7UUFDekMsT0FBTyxFQUFFLGNBQWM7S0FDeEI7SUFDRCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsY0FBYztLQUM1QjtDQUNGLENBQUMsQ0FBQTtBQUVGOztHQUVHO0FBQ1UsUUFBQSxLQUFLLEdBQUcsSUFBQSxlQUFNLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsU0FBUyxFQUFFLENBQUM7S0FDYjtJQUNELDhEQUE4RDtJQUM5RCw4QkFBOEIsRUFBRTtRQUM5QixNQUFNLEVBQUUsVUFBRyxFQUFFLEdBQUcsRUFBRSxpQkFBYztLQUNqQztJQUNELDBEQUEwRDtJQUMxRCw2QkFBNkIsRUFBRTtRQUM3QixNQUFNLEVBQUUsVUFBRyxFQUFFLEdBQUcsRUFBRSxpQkFBYztRQUNoQyxVQUFVLEVBQUUsYUFBYTtRQUN6QixhQUFhLEVBQUUsa0JBQWtCO0tBQ2xDO0lBQ0QsK0NBQStDLEVBQUU7UUFDL0Msc0JBQXNCO1FBQ3RCLGNBQWMsRUFBRSxnQkFBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFjO0tBQ3JEO0NBQ0YsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLElBQUksR0FBRyxJQUFBLGVBQU0sRUFBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxPQUFPLEVBQUUsY0FBYztJQUN2QixhQUFhLEVBQUU7UUFDYixlQUFlLEVBQUUscUNBQXFDO1FBQ3RELFlBQVksRUFBRSxLQUFLO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFBO0FBRUY7O0dBRUc7QUFDVSxRQUFBLFdBQVcsR0FBRyxJQUFBLGVBQU0sRUFBQyxNQUFNLENBQUMsQ0FBQztJQUN4Qyw4QkFBOEIsRUFBRTtRQUM5QixPQUFPLEVBQUUsR0FBRztLQUNiO0NBQ0YsQ0FBQyxDQUFBIn0=