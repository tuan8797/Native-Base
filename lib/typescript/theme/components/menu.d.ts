import { StyleSheet } from 'react-native';
declare const _default: {
    baseStyle: {
        py: number;
        borderRadius: string;
        shadow: number;
        bg: string;
        _dark: {
            bg: string;
        };
        _presenceTransition: {
            initial: {
                opacity: number;
            };
            animate: {
                opacity: number;
                translateY: number;
                transition: {
                    duration: number;
                };
            };
            exit: {
                opacity: number;
                transition: {
                    duration: number;
                };
            };
            style: import("react-native").RegisteredStyle<StyleSheet.AbsoluteFillStyle>;
        };
        _overlay: {
            unmountOnExit: boolean;
        };
        _backdrop: {
            bg: string;
        };
    };
};
export default _default;
export declare const MenuGroup: {
    baseStyle: {
        _title: {
            fontSize: string;
            textTransform: string;
            color: string;
            _dark: {
                color: string;
            };
        };
        p: number;
    };
};
export declare const MenuItem: {
    baseStyle: {
        px: number;
        py: number;
        _web: {
            outlineWidth: number;
        };
        _stack: {
            alignItems: string;
            px: number;
            space: number;
        };
        _icon: {
            size: number;
            opacity: number;
            color: string;
        };
        _text: {
            color: string;
        };
        _disabled: {
            _text: {
                color: string;
            };
        };
        _hover: {
            bg: string;
        };
        _focus: {
            bg: string;
        };
        _pressed: {
            bg: string;
        };
        _focusVisible: {
            _web: {
                outlineWidth: string;
                style: {
                    boxShadow: string;
                };
                bg: string;
            };
        };
        _dark: {
            _text: {
                color: string;
            };
            _disabled: {
                _text: {
                    color: string;
                };
            };
            _hover: {
                bg: string;
            };
            _focus: {
                bg: string;
            };
            _pressed: {
                bg: string;
            };
            _icon: {
                color: string;
            };
            _focusVisible: {
                _web: {
                    outlineWidth: string;
                    style: {
                        boxShadow: string;
                    };
                    bg: string;
                };
            };
        };
        _checked: {
            _icon: {
                opacity: number;
            };
        };
    };
    defaultProps: {};
};
//# sourceMappingURL=menu.d.ts.map