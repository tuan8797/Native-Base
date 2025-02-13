/// <reference types="react" />
import type { ColorSchemeType } from '../../../components/types';
import type { InterfaceStackProps } from '../../primitives/Stack/Stack';
export type IAppBarProps = InterfaceStackProps & {
    colorScheme?: ColorSchemeType;
    statusBarHeight?: number;
    space?: number;
};
export type IAppBarComponentType = ((props: IAppBarProps) => JSX.Element) & {
    Left: React.MemoExoticComponent<(props: InterfaceStackProps) => JSX.Element>;
    Right: React.MemoExoticComponent<(props: InterfaceStackProps) => JSX.Element>;
    Content: React.MemoExoticComponent<(props: InterfaceStackProps) => JSX.Element>;
};
//# sourceMappingURL=types.d.ts.map