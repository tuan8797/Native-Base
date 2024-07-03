/// <reference types="react" />
/// <reference types="fbt" />
import type { SpaceType as ThemeSpaceType } from '../components/types';
type SpaceType = 'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | ThemeSpaceType;
declare const getSpacedChildren: (children: JSX.Element[] | JSX.Element, space: undefined | SpaceType, axis: 'X' | 'Y', reverse: string, divider: JSX.Element | undefined) => any;
export default getSpacedChildren;
//# sourceMappingURL=getSpacedChildren.d.ts.map