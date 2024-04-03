import {IconAppName} from './constants';
import {makeIcon} from './makeIcon';
import {IconInstance} from './sources';
import type {IconComponent} from './types/icon';

type Icon = Record<IconAppName, IconComponent>;

const Icon: Icon = {
  [IconAppName.ADD]: makeIcon(IconInstance.Add, {height: '16', width: '16', viewBox: '0 0 16 16'}),
  [IconAppName.ARROW]: makeIcon(IconInstance.Arrow, {width: '27', height: '9', viewBox: '0 0 27 9'}),
  [IconAppName.BACK_ARROW]: makeIcon(IconInstance.Back, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.CANCEL]: makeIcon(IconInstance.Cancel, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.CATEGORY]: makeIcon(IconInstance.CategoryFolder, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.CATEGORY_SMALL]: makeIcon(IconInstance.CategoryFolder, {
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.CHECK]: makeIcon(IconInstance.Check, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.CLOSE]: makeIcon(IconInstance.Close, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.COLLECTION]: makeIcon(IconInstance.CollectionStar, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.COLLECTION_SMALL]: makeIcon(IconInstance.CollectionStar, {
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
  }),
  [IconAppName.DELETE]: makeIcon(IconInstance.Delete, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.DOWN]: makeIcon(IconInstance.Down, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.DOWNLOAD]: makeIcon(IconInstance.Download, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.DRIBBLE]: makeIcon(IconInstance.Dribble, {width: '20', height: '20', viewBox: '0 0 60 60'}),
  [IconAppName.FACEBOOK]: makeIcon(IconInstance.Facebook, {width: '20', height: '20', viewBox: '2 2 20 20'}),
  [IconAppName.FACEBOOK_COLOR]: makeIcon(IconInstance.FacebookColor, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.FILTER]: makeIcon(IconInstance.Filter, {width: '20', height: '20', viewBox: '0 0 16 14'}),
  [IconAppName.FOLDER]: makeIcon(IconInstance.Folder, {width: '26', height: '26', viewBox: '0 0 26 26'}),
  [IconAppName.GITHUB_COLOR]: makeIcon(IconInstance.GithubColor, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.GOOGLE_COLOR]: makeIcon(IconInstance.GoogleColor, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.ICON_LOADER]: makeIcon(IconInstance.IconLoader, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.INSTAGRAM]: makeIcon(IconInstance.Instagram, {width: '20', height: '20', viewBox: '0 0 60 60'}),
  [IconAppName.LOCK]: makeIcon(IconInstance.Lock, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.LOGO]: makeIcon(IconInstance.Logo, {width: '56', height: '56', viewBox: '0 0 56 56'}),
  [IconAppName.LOGO_SMALL]: makeIcon(IconInstance.LogoSmall, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.LOGO_TEXT]: makeIcon(IconInstance.LogoText, {width: '230', height: '56', viewBox: '0 0 230 56'}),
  [IconAppName.LOGO_WITH_TEXT]: makeIcon(IconInstance.LogoWithText, {
    width: '230',
    height: '56',
    viewBox: '0 0 230 56',
  }),
  [IconAppName.MENU]: makeIcon(IconInstance.Menu, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.PACKAGE]: makeIcon(IconInstance.Package, {width: '22', height: '22', viewBox: '0 0 22 22'}),
  [IconAppName.PRODUCT_HUNT]: makeIcon(IconInstance.ProductHunt, {width: '20', height: '20', viewBox: '2 2 20 20'}),
  [IconAppName.SEARCH]: makeIcon(IconInstance.Search, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.SEARCH_PANEL_SMALL]: makeIcon(IconInstance.Search, {width: '20', height: '20', viewBox: '0 0 24 24'}),
  [IconAppName.SEARCH_SPINNER]: makeIcon(IconInstance.SearchSpinner, {width: '24', height: '24', viewBox: '0 0 24 24'}),
  [IconAppName.TWITTER]: makeIcon(IconInstance.Twitter, {width: '20', height: '20', viewBox: '2 2 20 20'}),
  [IconAppName.UP]: makeIcon(IconInstance.Up, {width: '16', height: '16', viewBox: '0 0 16 16'}),
  [IconAppName.UNLOCK]: makeIcon(IconInstance.Unlock, {width: '50', height: '50', viewBox: '0 0 48 48'}),
  [IconAppName.USER]: makeIcon(IconInstance.User, {width: '16', height: '16', viewBox: '0 0 16 16'}),
};

export default Icon;
