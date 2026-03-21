import * as React from 'react';
import { MessageProps, Theme } from '../definitions/Component';
declare class ConsoleMessage extends React.Component<MessageProps, any> {
    shouldComponentUpdate(nextProps: any): boolean;
    theme: (theme: Theme) => {
        method: import("../definitions/Methods").Methods;
        variant: import("../definitions/Component").Variants;
        styles: import("../definitions/Styles").Styles;
    };
    render(): React.JSX.Element;
    getNode(): React.JSX.Element;
    typeCheck(log: any): false | React.JSX.Element;
}
export default ConsoleMessage;
