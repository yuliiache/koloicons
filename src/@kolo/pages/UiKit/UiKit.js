import React from 'react';
import {ButtonLink} from '@kolo/uiKit/ButtonLink/ButtonLink';

import {Buttons} from './components/Buttons/Buttons';
import ColorPickerWrap from './components/ColorPickerWrap/ColorPickerWrap';
import InputGroup from './components/InputGroup';
import LabelGroup from './components/LabelGroup/LabelGroup';
import {LinksGroup} from './components/LinksGroup/LinksGroup';
import {Tooltip} from './components/Tooltip/Tooltip';

const UiKit = () => {
  return (
    <div>
      <h1>UI-kit</h1>
      <ColorPickerWrap />
      <LabelGroup />
      <InputGroup />
      <Buttons />
      <ButtonLink
        text="Button link"
        url="/"
      />
      <LinksGroup />
      <Tooltip label="Tooltip">
        <button>Trigger me</button>
      </Tooltip>
    </div>
  );
};

export default UiKit;
