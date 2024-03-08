import Search from '@kolo/uiKit/Search/Search';
import {FC} from 'react';

import PanelAside from './components/PanelAside/PanelAside';
import styles from './IconsPagePanel.module.scss';
import {useIconsPagePanel} from './useIconsPagePanel';

const IconsPagePanel: FC = () => {
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

  return (
    <div className={styles.panel}>
      <PanelAside
        title="Categories"
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
        isOpened={isCollectionOpen}
        openPanel={openCollection}
        closePanel={closeCollection}
      />
    </div>
  );
};

export default IconsPagePanel;
