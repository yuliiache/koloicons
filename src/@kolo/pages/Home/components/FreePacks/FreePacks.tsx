import {IconSize} from '@kolo/constants/constants';
import Link from '@kolo/uiKit/Link/Link';
import {AppRoute} from 'constants/AppRoute';

import PackItem from '../PackItem/PackItem';
import styles from './FreePacks.module.scss';
import useFreePacks from './useFreePacks';

const FreePacks = () => {
  const {freePacks, isAuth, handleCategoryRedirect} = useFreePacks();

  return (
    <section className={styles['free-packs']}>
      <div className={styles['free-packs__wrapper']}>
        <h2 className={styles['free-packs__title']}>Free Icon Packs</h2>
        <p className={styles['free-packs__description']}>We regularly give our users free icon sets.</p>
        <div className={styles['free-packs__list']}>
          {freePacks.map(({icons, id, isFree, name, number}) => {
            return (
              <PackItem
                key={id}
                categoryId={id}
                icons={icons}
                iconsAmount={number}
                isFree={isFree}
                onClick={() => handleCategoryRedirect(AppRoute.ICONS, id, IconSize.DETAILED)}
                title={name}
              />
            );
          })}
        </div>
        {!isAuth && <Link url={AppRoute.LOGIN}>You need to Sign In for a free download</Link>}
      </div>
    </section>
  );
};

export default FreePacks;
