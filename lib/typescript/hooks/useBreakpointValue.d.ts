import type { ITheme } from '../theme/index';
type UseBreakpointValueParam = {
    [key in keyof ITheme['breakpoints']]?: any;
} | Array<any>;
export declare function useBreakpointValue(values: UseBreakpointValueParam): any;
export {};
//# sourceMappingURL=useBreakpointValue.d.ts.map