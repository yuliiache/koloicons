import {FC} from 'react';

import Categories from './components/Categories/Categories';
import IconsPageContent from './components/IconsPageContent/IconsPageContent';
import IconsPagePanel from './components/IconsPagePanel/IconsPagePanel';
import styles from './IconsPage.module.scss';
import {useIconsPage} from './useIconsPage';

const IconsPage: FC = () => {
  const {isLeftPanelOpen, isRightPanelOpen, setIsLeftPanelOpen, setIsRightPanelOpen} = useIconsPage();

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
        RightAsideContent={<div>Collection</div>}
      >
        {/* {instead of a child component for testing} */}
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, at ipsam? Quod deserunt, animi amet
            dolorem quas doloremque repellendus officia quo quisquam perspiciatis aliquid quibusdam adipisci voluptate
            reprehenderit, culpa exercitationem modi veritatis, commodi neque numquam obcaecati dolore! Inventore neque
            saepe commodi culpa minus, voluptatum tempora, quibusdam soluta numquam distinctio ea eius maxime sed? Odit
            possimus, sequi sunt mollitia necessitatibus iste alias rem quo excepturi autem. Velit debitis eveniet minus
            architecto, exercitationem assumenda aperiam iure. Alias quod totam quasi nulla architecto atque porro
            officiis nemo odio, laudantium ducimus, adipisci dolores labore aperiam velit. Nemo laudantium et, sed
            quibusdam blanditiis dolores atque.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, at ipsam? Quod deserunt, animi amet
            dolorem quas doloremque repellendus officia quo quisquam perspiciatis aliquid quibusdam adipisci voluptate
            reprehenderit, culpa exercitationem modi veritatis, commodi neque numquam obcaecati dolore! Inventore neque
            saepe commodi culpa minus, voluptatum tempora, quibusdam soluta numquam distinctio ea eius maxime sed? Odit
            possimus, sequi sunt mollitia necessitatibus iste alias rem quo excepturi autem. Velit debitis eveniet minus
            architecto, exercitationem assumenda aperiam iure. Alias quod totam quasi nulla architecto atque porro
            officiis nemo odio, laudantium ducimus, adipisci dolores labore aperiam velit. Nemo laudantium et, sed
            quibusdam blanditiis dolores atque.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, at ipsam? Quod deserunt, animi amet
            dolorem quas doloremque repellendus officia quo quisquam perspiciatis aliquid quibusdam adipisci voluptate
            reprehenderit, culpa exercitationem modi veritatis, commodi neque numquam obcaecati dolore! Inventore neque
            saepe commodi culpa minus, voluptatum tempora, quibusdam soluta numquam distinctio ea eius maxime sed? Odit
            possimus, sequi sunt mollitia necessitatibus iste alias rem quo excepturi autem. Velit debitis eveniet minus
            architecto, exercitationem assumenda aperiam iure. Alias quod totam quasi nulla architecto atque porro
            officiis nemo odio, laudantium ducimus, adipisci dolores labore aperiam velit. Nemo laudantium et, sed
            quibusdam blanditiis dolores atque.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, at ipsam? Quod deserunt, animi amet
            dolorem quas doloremque repellendus officia quo quisquam perspiciatis aliquid quibusdam adipisci voluptate
            reprehenderit, culpa exercitationem modi veritatis, commodi neque numquam obcaecati dolore! Inventore neque
            saepe commodi culpa minus, voluptatum tempora, quibusdam soluta numquam distinctio ea eius maxime sed? Odit
            possimus, sequi sunt mollitia necessitatibus iste alias rem quo excepturi autem. Velit debitis eveniet minus
            architecto, exercitationem assumenda aperiam iure. Alias quod totam quasi nulla architecto atque porro
            officiis nemo odio, laudantium ducimus, adipisci dolores labore aperiam velit. Nemo laudantium et, sed
            quibusdam blanditiis dolores atque.
          </p>
        </>
      </IconsPageContent>
    </section>
  );
};

export default IconsPage;
