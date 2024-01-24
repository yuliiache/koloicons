import Icon from '@kolo/uiKit/Icons';

import {Section} from '../Section/Section';
import styles from './IconsWrapper.module.scss';
const {iconsWrapper, iconsGrey, iconsRgba, iconsCheck} = styles;

const IconsWrapper = () => {
  return (
    <Section title="Icons">
      <div className={iconsWrapper}>
        <Icon.Add className={iconsGrey} />
        <Icon.Arrow />
        <Icon.BackArrow />
        <Icon.Cancel className={iconsRgba} />
        <Icon.Category />
        <Icon.Check className={iconsCheck} />
        <Icon.Close className={iconsGrey} />
        <Icon.Collection />
        <Icon.Delete className={iconsGrey} />
        <Icon.Down className={iconsGrey} />
        <Icon.Download className={iconsGrey} />
        <Icon.Dribble className={iconsRgba} />
        <Icon.Facebook className={iconsRgba} />
        <Icon.FacebookColor />
        <Icon.Folder />
        <Icon.GithubColor />
        <Icon.GoogleColor />
        <Icon.IconLoader />
        <Icon.Instagram className={iconsRgba} />
        <Icon.Lock className={iconsGrey} />
        <Icon.Logo />
        <Icon.LogoSmall />
        <Icon.LogoText />
        <Icon.LogoWithText />
        <Icon.Menu className={iconsGrey} />
        <Icon.Package />
        <Icon.ProductHunt className={iconsRgba} />
        <Icon.Search />
        <Icon.SearchSpinner />
        <Icon.Twitter className={iconsRgba} />
        <Icon.Unlock />
        <Icon.User className={iconsGrey} />
        <Icon.Filter className={iconsGrey} />
      </div>
    </Section>
  );
};

export default IconsWrapper;
