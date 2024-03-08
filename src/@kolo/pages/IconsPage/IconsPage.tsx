import {FC} from 'react';

import IconsPageContent from './components/IconsPageContent/IconsPageContent';
import IconsPagePanel from './components/IconsPagePanel/IconsPagePanel';

const IconsPage: FC = () => {
  return (
    <section>
      <IconsPagePanel />
      <IconsPageContent />
    </section>
  );
};

export default IconsPage;
