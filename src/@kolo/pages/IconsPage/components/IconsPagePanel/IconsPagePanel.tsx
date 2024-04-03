import Icon from '@kolo/uiKit/Icons';
import Search from '@kolo/uiKit/Search/Search';
import {FC} from 'react';

import PanelAside from './components/PanelAside/PanelAside';
import styles from './IconsPagePanel.module.scss';
import useIconSearch from './useIconSearch';
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
  } = useIconsPagePanel(setIsLeftPanelOpen);
  const {
    isOpen: isCollectionOpen,
    openPanelAside: openCollection,
    closePanelAside: closeCollection,
  } = useIconsPagePanel(setIsRightPanelOpen);
  const {handleIconSearch} = useIconSearch();

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
        onSearch={handleIconSearch}
        isRounded={false}
      />
      <PanelAside
        title="Collection"
        icon={<Icon.Collection />}
        isOpened={isCollectionOpen}
        openPanel={openCollection}
        closePanel={closeCollection}
        isCollection
      />
    </div>
  );
};

export default IconsPagePanel;
