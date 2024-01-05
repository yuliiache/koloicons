import React from 'react';
import {LinksGroup} from '@kolo/pages/UiKit/components/LinksGroup/LinksGroup';

import {Buttons} from './components/Buttons/Buttons';
import {Tooltip} from './components/Tooltip/Tooltip';

const UiKit = () => {
  return (
    <div>
      <h1>UI-kit</h1>
      <Buttons />
      <LinksGroup />
      <Tooltip label="Tooltip">
        <button>Trigger me</button>
      </Tooltip>
    </div>
  );
};

export default UiKit;
