import {FC} from 'react';

import Categories from './components/Categories/Categories';
import Collection from './components/Collection/Collection';
import IconsPageContent from './components/IconsPageContent/IconsPageContent';
import IconsByQuery from './components/IconsPagePanel/components/IconSearch/IconsByQuery';
import IconsPagePanel from './components/IconsPagePanel/IconsPagePanel';
import useIconSearch from './components/IconsPagePanel/useIconSearch';
import styles from './IconsPage.module.scss';
import {useIconsPage} from './useIconsPage';

const IconsPage: FC = () => {
  const {isLeftPanelOpen, isRightPanelOpen, setIsLeftPanelOpen, setIsRightPanelOpen} = useIconsPage();
  const {currentSearchQuery} = useIconSearch();

  return (
    <section className={styles.pageSection}>
      <IconsPagePanel
        setIsLeftPanelOpen={setIsLeftPanelOpen}
        setIsRightPanelOpen={setIsRightPanelOpen}
      />
      <IconsPageContent
        isLeftPanelOpen={isLeftPanelOpen}
        isRightPanelOpen={isRightPanelOpen}
        LeftAsideContent={<Categories />}
        RightAsideContent={<Collection/>}
      >
        {/* {instead of a child component for testing} */}
        <>{currentSearchQuery && <IconsByQuery />}</>
      </IconsPageContent>
    </section>
  );
};

export default IconsPage;
