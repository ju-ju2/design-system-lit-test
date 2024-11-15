import { TagColorType } from '@hnine-dev/design-system-common/types';
import { BaseProps } from '../../type';
import { BaseElement } from '../baseElement';
export interface TagProps extends BaseProps {
    propAriaLabel?: string;
    class?: string;
    color?: TagColorType;
    size?: "M";
    onClick?: (e: MouseEvent) => void;
}
export declare class Tag extends BaseElement {
    propAriaLabel: TagProps["propAriaLabel"];
    class: TagProps["class"];
    propStyle: TagProps["propStyle"];
    color: TagProps["color"];
    onClick: TagProps["onClick"];
    static styles: import('lit').CSSResult;
    private handleClick;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hnine-tag": Tag;
    }
}
//# sourceMappingURL=tag.d.ts.map