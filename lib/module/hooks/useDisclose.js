import React from 'react';
export function useDisclose(initState) {
  const [isOpen, setIsOpen] = React.useState(initState || false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle
  };
}
//# sourceMappingURL=useDisclose.js.map