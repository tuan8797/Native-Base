/// <reference types="react" />
import type { ScrollViewProps } from 'react-native';
import type { StyledProps } from '../../../theme/types';
import type { CustomProps, PlatformProps } from '../../types';
export interface InterfaceScrollViewProps extends ScrollViewProps, StyledProps, PlatformProps<IScrollViewProps> {
    /**
     * Renders components as Box children. Accepts a JSX.Element or an array of JSX.Element. */
    children?: JSX.Element | JSX.Element[] | string | any;
    /**
     * Pass props to contentContainerStyle, and this also resolves NB tokens.
     */
    _contentContainerStyle?: Partial<IScrollViewProps>;
}
export type IScrollViewProps = InterfaceScrollViewProps & CustomProps<'ScrollView'>;
//# sourceMappingURL=types.d.ts.map