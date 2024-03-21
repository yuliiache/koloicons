import Icon from '@kolo/uiKit/Icons';
import Search from '@kolo/uiKit/Search/Search';
import {FC} from 'react';

import Categories from '../Categories/Categories';
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
        icon={<Icon.Category />}
        isOpened={isCategoriesOpen}
        openPanel={openCategories}
        closePanel={closeCategories}
      >
        <Categories />
      </PanelAside>
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
