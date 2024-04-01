import {useEffect, useState} from 'react';

type setPanelOpenType = (value: boolean) => void;

interface PanelAsideHookReturnType {
  isOpen: boolean;
  openPanelAside: () => void;
  closePanelAside: (event?: React.MouseEvent<HTMLElement>) => void;
}

export const useIconsPagePanel = (setPanelOpen: setPanelOpenType): PanelAsideHookReturnType => {
  const [isOpen, setIsOpen] = useState(false);

  const openPanelAside = () => {
    setIsOpen(true);
  };

  const closePanelAside = (event?: React.MouseEvent<HTMLElement>) => {
    if (event) {
      event.stopPropagation();
    }
    setIsOpen(false);
  };

  useEffect(() => {
    setPanelOpen(isOpen);
  }, [isOpen]);

  return {
    isOpen,
    openPanelAside,
    closePanelAside,
  };
};
