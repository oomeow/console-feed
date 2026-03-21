import * as React from 'react';
import { Theme } from '../../definitions/Component';
import { Opts } from 'linkifyjs';
import { Message } from '../../definitions/Component';
interface Props {
    log: Message;
    quoted: boolean;
    theme?: Theme;
    linkifyOptions?: Opts;
}
declare class ObjectTree extends React.PureComponent<Props, any> {
    render(): React.JSX.Element[];
}
declare const _default: React.FC<import("emotion-theming/types/helper").AddOptionalTo<Props & React.RefAttributes<ObjectTree>, "theme">>;
export default _default;
