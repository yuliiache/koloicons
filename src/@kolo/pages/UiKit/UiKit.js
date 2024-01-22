import React from 'react';
import {ButtonLink} from '@kolo/uiKit/ButtonLink/ButtonLink';

import {Buttons} from './components/Buttons/Buttons';
import {Checkboxes} from './components/Checkboxes/Checkboxes';
import ColorPickerWrap from './components/ColorPickerWrap/ColorPickerWrap';
import GetFaqsButton from './components/GetFaqsButton/GetFaqsButton';
import InputGroup from './components/InputGroup';
import LabelGroup from './components/LabelGroup/LabelGroup';
import LinksGroup from './components/LinksGroup/LinksGroup';
import RadioGroupWrapper from './components/RadioGroupWrapper/RadioGroupWrapper';
import {Section} from './components/Section/Section';
import Tooltips from './components/Tooltips/Tooltips';

import style from './UiKit.module.scss';

const UiKit = () => {
  return (
    <div>
      <h1>UI-kit</h1>
      <Section title="HTTP request section">
        <div className={style.buttonsWrapper}>
          {/* Use small basic button and add it here. */}
          <GetFaqsButton />
        </div>
      </Section>
      <InputGroup />
      <ColorPickerWrap />
      <LabelGroup />
      <Checkboxes />
      <Buttons />
      <ButtonLink
        text="Button link"
        url="/"
      />
      <Section title="Link">
        <LinksGroup />
      </Section>
      <Section title="Tooltip">
        <Tooltips />
      </Section>
      <Section title="RadioGroupButtons">
        <RadioGroupWrapper />
      </Section>
    </div>
  );
};

export default UiKit;
