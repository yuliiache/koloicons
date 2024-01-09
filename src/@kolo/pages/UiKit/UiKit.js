import React from 'react';
import {ButtonLink} from '@kolo/uiKit/ButtonLink/ButtonLink';

import {Buttons} from './components/Buttons/Buttons';
import ColorPickerWrap from './components/ColorPickerWrap/ColorPickerWrap';
import InputGroup from './components/InputGroup';
import LabelGroup from './components/LabelGroup/LabelGroup';
import {LinksGroup} from './components/LinksGroup/LinksGroup';
import {Section} from './components/Section/Section';
import Tooltips from './components/Tooltips/Tooltips';

const UiKit = () => {
  return (
    <div>
      <h1>UI-kit</h1>
      <InputGroup />
      <ColorPickerWrap />
      <LabelGroup />
      <InputGroup />
      <Buttons />
      <ButtonLink
        text="Button link"
        url="/"
      />
      <LinksGroup />
      <Section title="Tooltip">
        <Tooltips />
      </Section>
    </div>
  );
};

export default UiKit;
