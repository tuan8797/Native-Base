import type { InterfaceButtonProps } from '../../primitives/Button/types';
import type { InterfaceBoxProps } from '../../primitives/Box';
import type { MutableRefObject } from 'react';
import type { CustomProps } from '../../../components/types';
export interface InterfaceActionsheetProps extends InterfaceBoxProps<IActionsheetProps> {
    /**
     * If true, the ActionSheet will open. Useful for controllable state behavior.
     */
    isOpen?: boolean;
    /**
     * Callback invoked when the modal is closed.
     */
    onClose?: () => any;
    /**
     * If true, disables the overlay.
     * @default false
     */
    disableOverlay?: boolean;
    /**
     * If true, hides the drag indicator.
     * @default false
     */
    hideDragIndicator?: boolean;
    /**
     * Props applied on Overlay.
     */
    _backdrop?: any;
    useRNModal?: boolean;
}
export interface IActionsheetContentProps extends InterfaceBoxProps<IActionsheetContentProps> {
    /**
     * Props applied on area above actionsheet content.
     */
    _dragIndicatorWrapperOffSet?: InterfaceBoxProps<IActionsheetContentProps>;
    /**
     * Props applied on area around drag indicator.
     */
    _dragIndicatorWrapper?: InterfaceBoxProps<IActionsheetContentProps>;
    /**
     * Props applied on drag indicator.
     */
    _dragIndicator?: InterfaceBoxProps<IActionsheetContentProps>;
}
export interface IActionsheetFooterProps extends InterfaceBoxProps<IActionsheetFooterProps> {
}
export interface IActionsheetHeaderProps extends InterfaceBoxProps<IActionsheetHeaderProps> {
}
export interface IActionsheetItemProps extends Omit<InterfaceButtonProps, 'variant' | 'size' | 'colorScheme'> {
}
export type IActionsheetComponentType = ((props: IActionsheetProps & {
    ref?: MutableRefObject<any>;
}) => JSX.Element) & {
    Content: React.MemoExoticComponent<(props: IActionsheetContentProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
    Item: React.MemoExoticComponent<(props: IActionsheetItemProps & {
        ref?: MutableRefObject<any>;
    }) => JSX.Element>;
};
export type IActionsheetProps = InterfaceActionsheetProps & CustomProps<'Actionsheet'>;
//# sourceMappingURL=types.d.ts.map