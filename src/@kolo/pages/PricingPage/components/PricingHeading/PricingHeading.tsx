import useNavigateOnSearch from '@kolo/services/hooks/useNavigateOnSearch';
import Search from '@kolo/uiKit/Search/Search';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';

import styles from './PricingHeading.module.scss';

const PricingHeading: FC = () => {
  const {onSearch} = useNavigateOnSearch(AppRoute.ICONS);

  return (
    <section className={styles.heading}>
      <div className={styles.container}>
        <Search
          onSearch={onSearch}
          placeholder="Search icon"
        />
        <h1 className={styles.title}>Pricing</h1>
        <p className={styles.introText}>
          The Biggest Icons Pack. In other words, you will never have to purchase icons again!
        </p>
      </div>
    </section>
  );
};

export default PricingHeading;
