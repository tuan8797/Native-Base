import type { ITheme } from '../../theme/index';
export type ResponsiveValue<T> = T | null | undefined | Array<T | null> | {
    [key in keyof ITheme['breakpoints']]?: T;
};
//# sourceMappingURL=responsiveValue.d.ts.map