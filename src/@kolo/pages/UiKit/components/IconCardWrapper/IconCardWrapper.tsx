import IconCard from '@kolo/pages/IconsPage/components/IconCard/IconCard';
import {Icon} from '@kolo/types/icon';
import React from 'react';

import {Section} from '../Section/Section';

interface IconProps {
  icon: Icon;
  categoryNumber: number;
  categoryName: string;
  isFree: boolean;
  iconId: string;
}

const iconData = {
  category: {
    name: 'Financial',
    number: 7,
    id: '5d45660c241234001664820c',
  },
  name: 'Mobile payment',
  size: '60px',
  style: 'line',
  id: '5d6a87bdef38414cb068e989',
  isFree: false,
};

const IconCardWrapper: React.FC = () => {
  const iconProps: IconProps = {
    icon: {
      name: iconData.name,
      style: iconData.style,
      size: iconData.size,
      id: iconData.id,
    },
    categoryNumber: iconData.category.number,
    categoryName: iconData.category.name,
    isFree: iconData.isFree,
    iconId: iconData.id,
  };
  return (
    <Section title={'IconCard'}>
      <IconCard {...iconProps} />
    </Section>
  );
};

export default IconCardWrapper;
