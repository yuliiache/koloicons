import React from 'react';

import Icon from '../Icons';
import {IconProps} from '../Icons/types/icon';
import {SocialURL} from './constants';

interface SocialLinkConfigItem {
  url: SocialURL;
  IconComponent: React.FC<IconProps>;
  id: string;
}

const SocialLinksConfig: SocialLinkConfigItem[] = [
  {
    url: SocialURL.INSTAGRAM,
    IconComponent: Icon.Instagram,
    id: 'social-links-instagram',
  },
  {
    url: SocialURL.DRIBBLE,
    IconComponent: Icon.Dribble,
    id: 'social-links-dribble',
  },
];

export default SocialLinksConfig;
