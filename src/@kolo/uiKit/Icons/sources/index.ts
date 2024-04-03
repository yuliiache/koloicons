import {IconInstanceName} from '../constants';
import type {IconComponent} from '../types/icon';
import {Add} from './Add';
import {Arrow} from './Arrow';
import {Back} from './Back';
import {Cancel} from './Cancel';
import {CategoryFolder} from './CategoryFolder';
import {Check} from './Check';
import {Close} from './Close';
import {CollectionStar} from './CollectionStar';
import {Delete} from './Delete';
import {Down} from './Down';
import {Download} from './Download';
import {Dribble} from './Dribble';
import {Facebook} from './Facebook';
import {FacebookColor} from './FacebookColor';
import {Filter} from './Filter';
import {Folder} from './Folder';
import {GithubColor} from './GithubColor';
import {GoogleColor} from './GoogleColor';
import {IconLoader} from './IconLoader';
import {Instagram} from './Instagram';
import {Lock} from './Lock';
import {Logo} from './Logo';
import {LogoSmall} from './LogoSmall';
import {LogoText} from './LogoText';
import {LogoWithText} from './LogoWithText';
import {Menu} from './Menu';
import {Package} from './Package';
import {ProductHunt} from './ProductHunt';
import {Search} from './Search';
import {SearchSpinner} from './SearchSpinner';
import {Twitter} from './Twitter';
import {Unlock} from './Unlock';
import { Up } from './Up';
import {User} from './User';

type IconInstance = Record<IconInstanceName, IconComponent>;

export const IconInstance: IconInstance = {
  [IconInstanceName.ADD]: Add,
  [IconInstanceName.ARROW]: Arrow,
  [IconInstanceName.BACK]: Back,
  [IconInstanceName.CANCEL]: Cancel,
  [IconInstanceName.CATEGORY_FOLDER]: CategoryFolder,
  [IconInstanceName.CHECK]: Check,
  [IconInstanceName.CLOSE]: Close,
  [IconInstanceName.COLLECTION_STAR]: CollectionStar,
  [IconInstanceName.DELETE]: Delete,
  [IconInstanceName.DOWN]: Down,
  [IconInstanceName.DOWNLOAD]: Download,
  [IconInstanceName.DRIBBLE]: Dribble,
  [IconInstanceName.FACEBOOK]: Facebook,
  [IconInstanceName.FACEBOOK_COLOR]: FacebookColor,
  [IconInstanceName.FOLDER]: Folder,
  [IconInstanceName.GITHUB_COLOR]: GithubColor,
  [IconInstanceName.GOOGLE_COLOR]: GoogleColor,
  [IconInstanceName.ICON_LOADER]: IconLoader,
  [IconInstanceName.INSTAGRAM]: Instagram,
  [IconInstanceName.LOCK]: Lock,
  [IconInstanceName.LOGO]: Logo,
  [IconInstanceName.LOGO_SMALL]: LogoSmall,
  [IconInstanceName.LOGO_TEXT]: LogoText,
  [IconInstanceName.LOGO_WITH_TEXT]: LogoWithText,
  [IconInstanceName.MENU]: Menu,
  [IconInstanceName.PACKAGE]: Package,
  [IconInstanceName.PRODUCT_HUNT]: ProductHunt,
  [IconInstanceName.SEARCH]: Search,
  [IconInstanceName.SEARCH_SPINNER]: SearchSpinner,
  [IconInstanceName.TWITTER]: Twitter,
  [IconInstanceName.UP]: Up,
  [IconInstanceName.UNLOCK]: Unlock,
  [IconInstanceName.USER]: User,
  [IconInstanceName.FILTER]: Filter,
};
