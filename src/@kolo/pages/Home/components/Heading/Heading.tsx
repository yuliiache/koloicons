import {isAuthenticatedSelector} from '@kolo/pages/LoginPage/selectors';
import useNavigateOnSearch from '@kolo/services/hooks/useNavigateOnSearch';
import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import ButtonLink from '@kolo/uiKit/ButtonLink/ButtonLink';
import Search from '@kolo/uiKit/Search/Search';
import {useAppSelector} from 'app/hooks';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';

import styles from './Heading.module.scss';

const Heading: FC = () => {
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);
  const {onSearch} = useNavigateOnSearch(AppRoute.ICONS);

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
          {!isAuthenticated && (
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
