import type { InterfaceInputProps } from '../../components/primitives/Input/types';
export declare const Input: {
    baseStyle: (props: InterfaceInputProps & {
        theme: any;
    }) => {
        fontFamily: string;
        py: string;
        px: string;
        borderRadius: string;
        overflow: string;
        _disabled: {
            opacity: string;
            _web: {
                disabled: boolean;
                cursor: string;
            };
        };
        _web: {
            outlineWidth: string;
            overflow: string;
            lineHeight: string;
            style: {
                outline: string;
            };
            cursor: string;
        };
        _input: {
            bg: string;
            flex: number;
            w: string;
            h: string;
        };
        placeholderTextColor: string;
        color: string;
        borderColor: string;
        _stack: {
            flexDirection: string;
            alignItems: string;
            overflow: string;
        };
        _hover: {
            borderColor: string;
        };
        _invalid: {
            borderColor: string;
            _hover: {
                borderColor: string;
            };
            _stack: {
                style: {
                    outlineWidth: string;
                    boxShadow: string;
                };
            };
        };
        _focus: {
            borderColor: string;
            _hover: {
                borderColor: string;
            };
            _invalid: {
                borderColor: string;
                _hover: {
                    borderColor: string;
                };
                _stack: {
                    style: {
                        outlineWidth: string;
                        boxShadow: string;
                    };
                };
            };
            _ios: {
                selectionColor: string;
            };
            _android: {
                selectionColor: string;
            };
            _disabled: {
                placeholderTextColor: string;
                _hover: {
                    borderColor: string;
                };
            };
            _stack: {
                style: {
                    outlineWidth: string;
                    boxShadow: string;
                };
            };
        };
        _dark: {
            placeholderTextColor: string;
            color: string;
            borderColor: string;
            _hover: {
                borderColor: string;
            };
            _focus: {
                borderColor: string;
                _hover: {
                    borderColor: string;
                };
                _stack: {
                    style: {
                        outlineWidth: string;
                        boxShadow: string;
                    };
                };
            };
            _invalid: {
                borderColor: string;
                _stack: {
                    style: {
                        outlineWidth: string;
                        boxShadow: string;
                    };
                };
                _hover: {
                    borderColor: string;
                };
            };
            _ios: {
                selectionColor: string;
            };
            _android: {
                selectionColor: string;
            };
            _disabled: {
                placeholderTextColor: string;
                _hover: {
                    borderColor: string;
                };
            };
            _stack: {
                flexDirection: string;
                alignItems: string;
                overflow: string;
            };
        };
    };
    defaultProps: {
        size: string;
        variant: string;
    };
    variants: {
        outline: any;
        underlined: any;
        rounded: any;
        filled: any;
        unstyled: any;
    };
    sizes: {
        '2xl': {
            fontSize: string;
        };
        xl: {
            fontSize: string;
        };
        lg: {
            fontSize: string;
        };
        md: {
            fontSize: string;
        };
        sm: {
            fontSize: string;
        };
        xs: {
            fontSize: string;
        };
    };
};
declare const _default: {};
export default _default;
//# sourceMappingURL=input.d.ts.map