"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalOverlay = exports.ModalHeader = exports.ModalFooter = exports.ModalContent = exports.ModalCloseButton = exports.ModalBody = exports.Modal = void 0;
var _reactNative = require("react-native");
const sizes = {
  xs: {
    contentSize: {
      width: '60%',
      maxWidth: '280'
    }
  },
  sm: {
    contentSize: {
      width: '65%',
      maxWidth: '320'
    }
  },
  md: {
    contentSize: {
      width: '75%',
      maxWidth: '380'
    }
  },
  lg: {
    contentSize: {
      width: '80%',
      maxWidth: '520'
    }
  },
  xl: {
    contentSize: {
      width: '90%',
      maxWidth: '580'
    }
  },
  full: {
    contentSize: {
      width: '100%'
    }
  }
};
const Modal = {
  baseStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    _web: {
      pointerEvents: 'box-none'
    },
    _backdropFade: {
      exitDuration: 150,
      entryDuration: 200
    },
    _slide: {
      overlay: false,
      duration: 200
    },
    _fade: {
      exitDuration: 100,
      entryDuration: 200
    }
  },
  sizes,
  defaultProps: {
    size: 'md',
    closeOnOverlayClick: true
  }
};
exports.Modal = Modal;
const ModalContent = {
  baseStyle: () => {
    return {
      shadow: 1,
      rounded: 'lg',
      maxHeight: `${_reactNative.Dimensions.get('window').height - 150}px`,
      overflow: 'hidden',
      bg: 'muted.50',
      _text: {
        color: 'text.900'
      },
      _dark: {
        bg: 'muted.800',
        _text: {
          color: 'text.50'
        }
      }
    };
  }
};
exports.ModalContent = ModalContent;
const ModalCloseButton = {
  baseStyle: () => {
    return {
      position: 'absolute',
      right: '3',
      top: '3',
      zIndex: '1',
      colorScheme: 'coolGray',
      p: '2',
      bg: 'transparent',
      borderRadius: 'sm',
      _web: {
        outlineWidth: 0,
        cursor: 'pointer'
      },
      _icon: {
        color: 'muted.500',
        size: '4'
      },
      _hover: {
        bg: 'muted.200'
      },
      _pressed: {
        bg: 'muted.300'
      },
      _dark: {
        _icon: {
          color: 'muted.400'
        },
        _hover: {
          bg: 'muted.700'
        },
        _pressed: {
          bg: 'muted.600'
        }
      }
    };
  }
};
exports.ModalCloseButton = ModalCloseButton;
const ModalHeader = {
  baseStyle: () => {
    return {
      p: '4',
      borderBottomWidth: '1',
      _text: {
        color: 'text.900',
        fontSize: 'md',
        fontWeight: 'semibold',
        lineHeight: 'sm'
      },
      bg: 'muted.50',
      borderColor: 'muted.300',
      _dark: {
        bg: 'muted.800',
        borderColor: 'muted.700',
        _text: {
          color: 'text.50'
        }
      }
    };
  }
};
exports.ModalHeader = ModalHeader;
const ModalBody = {
  baseStyle: () => {
    return {
      p: '4',
      _text: {
        color: 'text.900'
      },
      _dark: {
        _text: {
          color: 'text.50'
        }
      }
    };
  }
};
exports.ModalBody = ModalBody;
const ModalFooter = {
  baseStyle: () => {
    return {
      p: '4',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      borderTopWidth: 1,
      bg: 'muted.50',
      borderColor: 'muted.300',
      _dark: {
        bg: 'muted.800',
        borderColor: 'muted.700'
      }
    };
  }
};
exports.ModalFooter = ModalFooter;
const ModalOverlay = {
  baseStyle: {
    position: 'absolute',
    left: '0',
    top: '0',
    opacity: '50',
    right: '0',
    bottom: '0'
  }
};
exports.ModalOverlay = ModalOverlay;
//# sourceMappingURL=modal.js.map