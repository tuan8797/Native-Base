import { mode } from '../tools';
export const Select = {
  baseStyle: props => {
    return {
      _webSelect: {
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0,
        zIndex: 1
      },
      customDropdownIconProps: {
        size: '6',
        p: '1',
        pl: '0',
        color: 'trueGray.400'
      },
      _web: {
        pointerEvents: 'none'
      },
      _disabled: {
        opacity: '80',
        bg: mode('muted.100', 'muted.700')(props)
      },
      _invalid: {
        borderColor: mode('danger.600', 'danger.300')(props)
      },
      _focus: {
        borderColor: mode('primary.400', 'primary.500')(props)
      },
      _hover: {
        bg: mode('gray.100', 'gray.700')(props)
      },
      _actionSheetBody: {
        w: '100%'
      },
      _actionSheetContent: {}
    };
  },
  defaultProps: {
    optimized: true
  }
};

// SelectIcon - only for custom variant
export const SelectItem = {
  baseStyle: {
    p: '1',
    px: '2',
    borderRadius: '0',
    minH: '0'
  }
};
//# sourceMappingURL=select.js.map