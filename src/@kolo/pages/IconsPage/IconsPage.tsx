import {FC} from 'react';

import Categories from './components/Categories/Categories';
import Collection from './components/Collection/Collection';
import IconsByQuery from './components/IconsPageContent/IconsBySearch/IconsByQuery';
import IconsContent from './components/IconsPageContent/IconsContent/IconsContent';
import IconsPageContent from './components/IconsPageContent/IconsPageContent';
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
        <>
          {currentSearchQuery && <IconsByQuery />}
          {!currentSearchQuery && <IconsContent />}
        </>
      </IconsPageContent>
    </section>
  );
};

export default IconsPage;
