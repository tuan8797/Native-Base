import React from 'react';
import type { IToastProps } from './types';
export declare const ToastProvider: ({ children }: {
    children: any;
}) => React.JSX.Element;
export declare const useToast: () => {
    show: (props: IToastProps) => any;
    close: (id: any) => void;
    closeAll: () => void;
    isActive: (id: any) => boolean;
};
export type IToastService = ReturnType<typeof useToast>;
export declare const ToastRef: React.MutableRefObject<{
    show: (props: IToastProps) => any;
    close: (id: any) => void;
    closeAll: () => void;
    isActive: (id: any) => boolean;
}>;
export declare const Toast: IToastService;
//# sourceMappingURL=Toast.d.ts.map