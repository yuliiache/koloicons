import React from 'react';
import HelpLinks from '@kolo/uiKit/HelpLinks';

import {ButtonLinkWrap} from './components/ButtonLink/ButtonLinkWrap';
import {Buttons} from './components/Buttons/Buttons';
import {Checkboxes} from './components/Checkboxes/Checkboxes';
import ColorPickerWrap from './components/ColorPickerWrap/ColorPickerWrap';
import GetCategoriesButton from './components/GetCategoriesButton/GetCategoriesButton';
import GetFaqsButton from './components/GetFaqsButton/GetFaqsButton';
import GetFeedbacks from './components/GetFeedbacks/GetFeedBacks';
import GetPricingGroup from './components/GetPricing/GetPricingGroup';
import IconsWrapper from './components/IconsWrapper/IconsWrapper';
import InputGroup from './components/InputGroup';
import LabelGroup from './components/LabelGroup/LabelGroup';
import LinksGroup from './components/LinksGroup/LinksGroup';
import Logos from './components/Logos';
import PricingCardWrap from './components/PricingCardWrap/PricingCardWrap';
import RadioGroupWrapper from './components/RadioGroupWrapper/RadioGroupWrapper';
import {Section} from './components/Section/Section';
import SignInMessageWrap from './components/SignInMessage/SignInMessageWrap';
import Tooltips from './components/Tooltips/Tooltips';

import style from './UiKit.module.scss';

const UiKit = () => {
  return (
    <div>
      <h1>UI-kit</h1>
      <Section title="HTTP request section">
        <div className={style.buttonsWrapper}>
          <GetCategoriesButton />
          <GetFeedbacks />
          <GetFaqsButton />
          <GetPricingGroup />
        </div>
      </Section>
      <InputGroup />
      <ColorPickerWrap />
      <LabelGroup />
      <Checkboxes />
      <Buttons />
      <ButtonLinkWrap />
      <SignInMessageWrap />
      <LinksGroup />
      <PricingCardWrap />
      <Section title="Link">
        <LinksGroup />
      </Section>
      <Section title="Tooltip">
        <Tooltips />
      </Section>
      <Section title="RadioGroupButtons">
        <RadioGroupWrapper />
      </Section>
      <Section title="HelpLinks">
        <HelpLinks />
      </Section>
      <IconsWrapper />
      <Logos />
    </div>
  );
};

export default UiKit;
