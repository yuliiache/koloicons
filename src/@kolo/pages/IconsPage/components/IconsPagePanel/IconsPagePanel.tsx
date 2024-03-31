import Icon from '@kolo/uiKit/Icons';
import Search from '@kolo/uiKit/Search/Search';
import {FC, useEffect} from 'react';

import PanelAside from './components/PanelAside/PanelAside';
import styles from './IconsPagePanel.module.scss';
import {useIconsPagePanel} from './useIconsPagePanel';

interface Props {
  setIsLeftPanelOpen: (isOpen: boolean) => void;
  setIsRightPanelOpen: (isOpen: boolean) => void;
}

const IconsPagePanel: FC<Props> = ({setIsLeftPanelOpen, setIsRightPanelOpen}) => {
  const {
    isOpen: isCategoriesOpen,
    openPanelAside: openCategories,
    closePanelAside: closeCategories,
  } = useIconsPagePanel();
  const {
    isOpen: isCollectionOpen,
    openPanelAside: openCollection,
    closePanelAside: closeCollection,
  } = useIconsPagePanel();

  useEffect(() => {
    setIsLeftPanelOpen(isCategoriesOpen);
    setIsRightPanelOpen(isCollectionOpen);
  }, [isCategoriesOpen, isCollectionOpen]);

  return (
    <div className={styles.panel}>
      <PanelAside
        title="Categories"
        icon={<Icon.Category />}
        isOpened={isCategoriesOpen}
        openPanel={openCategories}
        closePanel={closeCategories}
      />
      <Search
        placeholder="Search icon"
        onSearch={() => {
          () => null;
        }}
        isRounded={false}
      />
      <PanelAside
        title="Collection"
        icon={<Icon.Collection />}
        isOpened={isCollectionOpen}
        openPanel={openCollection}
        closePanel={closeCollection}
      />
    </div>
  );
};

export default IconsPagePanel;
