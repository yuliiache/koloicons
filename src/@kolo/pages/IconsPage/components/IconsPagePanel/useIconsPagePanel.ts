import {useState} from 'react';

interface PanelAsideHookReturnType {
  isOpen: boolean;
  openPanelAside: () => void;
  closePanelAside: (event?: React.MouseEvent<HTMLElement>) => void;
}

export const useIconsPagePanel = (): PanelAsideHookReturnType => {
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

  return {
    isOpen,
    openPanelAside,
    closePanelAside,
  };
};
