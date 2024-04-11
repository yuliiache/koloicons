import {IconSize} from '@kolo/constants/constants';
import PackItem from '@kolo/pages/Home/components/PackItem/PackItem';
import {usePackItemHelper} from '@kolo/pages/UiKit/components/PackItemWrap/usePackItemHelper';
import {AppRoute} from 'constants/AppRoute';
import {useNavigate} from 'react-router';

import {Section} from '../Section/Section';

const PackItemWrap = () => {
  const {packItems} = usePackItemHelper();
  const packItem = packItems[0];
  const navigate = useNavigate();

  const handleCategoryRedirect = (route: AppRoute, categoryId: string, size: IconSize) => {
    navigate(`${route}?category=${categoryId}&size=${size}`);
  };

  return (
    <Section title="Pack Item Section">
      {packItems.length > 0 && (
        <div style={{display: 'flex', justifyContent: 'center', maxWidth: '1024px'}}>
          <PackItem
            categoryId={packItem.id}
            title={packItem.name}
            iconsAmount={packItem.number}
            icons={packItem.icons}
            isFree={packItem.isFree}
            onClick={() => {
              handleCategoryRedirect(AppRoute.ICONS, packItem.id, IconSize.DETAILED);
            }}
          />
        </div>
      )}
    </Section>
  );
};

export default PackItemWrap;
