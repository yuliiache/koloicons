import {useAppDispatch} from 'app/hooks';
import {FC, useEffect} from 'react';

import {getIconCategoriesStartAction} from './components/Categories/slice/categoriesSlice';
import IconsPageContent from './components/IconsPageContent/IconsPageContent';
import IconsPagePanel from './components/IconsPagePanel/IconsPagePanel';

const IconsPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getIconCategoriesStartAction());
  }, []);

  return (
    <section>
      <IconsPagePanel />
      <IconsPageContent />
    </section>
  );
};

export default IconsPage;
