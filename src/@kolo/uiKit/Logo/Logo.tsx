import classnames from 'classnames';
import {AppRoute} from 'constants/AppRoute';
import {FC} from 'react';
import {Link} from 'react-router-dom';

import Icon from '../Icons';
import {LOGO_TEST_ID} from './constants';
import styles from './Logo.module.scss';

const {logoAnimation, logo} = styles;

interface Props {
  isLoading: boolean;
}

const Logo: FC<Props> = ({isLoading = false}) => {
  return (
    <Link
      to={AppRoute.HOME}
      data-testid={LOGO_TEST_ID}
    >
      <Icon.Logo className={classnames(logo, {[logoAnimation]: isLoading})} />
    </Link>
  );
};

export default Logo;
