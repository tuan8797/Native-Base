"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tools = require("../tools");
var _reactNative = require("react-native");
const baseStyle = props => {
  const {
    primary
  } = props.theme.colors;
  const focusRing = _reactNative.Platform.OS === 'web' ? {
    boxShadow: `${primary[400]} 0px 0px 0px 3px`
  } : {};
  return {
    borderRadius: 'sm',
    _web: {
      cursor: props.isDisabled ? 'not-allowed' : props.isLoading ? 'default' : 'pointer'
    },
    _focusVisible: {
      style: props.variant !== 'unstyled' ? {
        ...focusRing
      } : {}
    },
    _disabled: {
      opacity: 0.5
    }
  };
};
function variantGhost(props) {
  const {
    colorScheme
  } = props;
  return {
    bg: 'transparent',
    _web: {
      outlineWidth: 0
    },
    _hover: {
      bg: (0, _tools.transparentize)((0, _tools.mode)(`${colorScheme}.200`, `${colorScheme}.400`)(props), 0.5)(props.theme)
    },
    _focusVisible: {
      bg: (0, _tools.transparentize)((0, _tools.mode)(`${colorScheme}.200`, `${colorScheme}.400`)(props), 0.5)(props.theme)
    },
    _pressed: {
      bg: (0, _tools.transparentize)((0, _tools.mode)(`${colorScheme}.200`, `${colorScheme}.500`)(props), 0.6)(props.theme)
    }
  };
}
function variantOutline(props) {
  const {
    colorScheme
  } = props;
  return {
    borderWidth: '1',
    borderColor: `${colorScheme}.300`,
    _icon: {
      color: (0, _tools.mode)(`${colorScheme}.500`, `${colorScheme}.300`)(props)
    },
    _web: {
      outlineWidth: 0
    },
    _hover: {
      bg: (0, _tools.transparentize)((0, _tools.mode)(`${colorScheme}.200`, `${colorScheme}.400`)(props), 0.5)(props.theme)
    },
    _focusVisible: {
      bg: (0, _tools.transparentize)((0, _tools.mode)(`${colorScheme}.200`, `${colorScheme}.400`)(props), 0.5)(props.theme)
    },
    _pressed: {
      bg: (0, _tools.transparentize)((0, _tools.mode)(`${colorScheme}.300`, `${colorScheme}.500`)(props), 0.6)(props.theme)
    }
  };
}
function variantSolid(props) {
  const {
    colorScheme
  } = props;
  return {
    bg: `${colorScheme}.500`,
    _web: {
      outlineWidth: 0
    },
    _disabled: {
      bg: (0, _tools.mode)(`trueGray.300`, `trueGray.600`)(props)
    },
    _hover: {
      bg: `${colorScheme}.600`
    },
    _pressed: {
      bg: `${colorScheme}.700`
    },
    _focus: {
      bg: `${colorScheme}.600`
    },
    _icon: {
      color: (0, _tools.mode)('gray.50', 'gray.800')(props)
    }
  };
}
function variantUnstyled() {
  return {};
}
const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  unstyled: variantUnstyled
};
const defaultProps = {
  variant: 'ghost',
  size: 'md',
  colorScheme: 'primary'
};
const sizes = {
  lg: {
    p: 3
  },
  md: {
    p: 2
  },
  sm: {
    p: 1
  }
};
var _default = {
  baseStyle,
  variants,
  sizes,
  defaultProps
};
exports.default = _default;
//# sourceMappingURL=icon-button.js.map