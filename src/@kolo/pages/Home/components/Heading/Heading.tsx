import useAuth from '@kolo/services/hooks/useAuth';
import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import ButtonLink from '@kolo/uiKit/ButtonLink/ButtonLink';
import Search from '@kolo/uiKit/Search/Search';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';

import styles from './Heading.module.scss';
import useNavigateOnSearch from './useNavigateOnSearch';

const Heading: FC = () => {
  const {isAuthorized} = useAuth();
  const {onSearch} = useNavigateOnSearch();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Icons Library</h1>
        <Search
          placeholder="Search icon"
          onSearch={onSearch}
          isFocused={true}
        />
        <div className={styles.navigation}>
          {!isAuthorized && (
            <ButtonLink
              url={AppRoute.REGISTER}
              text={'Try for Free'}
              color={ButtonColor.ACCENT}
              size={ButtonSize.FULL_WIDTH}
            />
          )}

          <ButtonLink
            url={AppRoute.ICONS}
            text={'Browse All Icons'}
            size={ButtonSize.FULL_WIDTH}
          />
        </div>
      </div>
    </section>
  );
};

export default Heading;
