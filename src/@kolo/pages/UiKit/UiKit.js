import React from 'react';
import PricingFAQs from '@kolo/pages/PricingPage/components/PricingFAQs/PricingFAQs';
import HelpLinks from '@kolo/uiKit/HelpLinks';

import AuthAction from './components/AuthAction/AuthAction';
import ButtonIconWrap from './components/ButtonIconWrap/ButtonIconWrap';
import {ButtonLinkWrap} from './components/ButtonLink/ButtonLinkWrap';
import {Buttons} from './components/Buttons/Buttons';
import Checkboxes from './components/Checkboxes/Checkboxes';
import ColorPickerWrap from './components/ColorPickerWrap/ColorPickerWrap';
import DownloadOptionsWrapper from './components/DownloadOptionsWrapper/DownloadOptionsWrapper';
import FormatsWrap from './components/FormatsWrap/FormatsWrap';
import GetCategoriesButton from './components/GetCategoriesButton/GetCategoriesButton';
import GetFaqsButton from './components/GetFaqsButton/GetFaqsButton';
import GetFeedbacks from './components/GetFeedbacks/GetFeedBacks';
import GetIconButtons from './components/GetIconButtons/GetIconButtons';
import GetIconsButtons from './components/GetIconsButtons/GetIconsButtons';
import GetIconsByCategoryGroup from './components/GetIconsByCategory/GetIconsByCategoryGroup';
import GetPricingGroup from './components/GetPricing/GetPricingGroup';
import IconCardWrapper from './components/IconCardWrapper/IconCardWrapper';
import IconsWrapper from './components/IconsWrapper/IconsWrapper';
import InputGroup from './components/InputGroup/InputGroup';
import LabelGroup from './components/LabelGroup/LabelGroup';
import LinksGroup from './components/LinksGroup/LinksGroup';
import Logos from './components/Logos';
import LogoutButton from './components/LogoutButton/LogoutButton';
import PortalWrap from './components/Modal/PortalWrap';
import MonthPackWrap from './components/MonthPackWrap/MonthPackWrap';
import PackItemWrap from './components/PackItemWrap/PackItemWrap';
import PricingWrapper from './components/Pricing/PricingWrapper';
import PricingCardWrap from './components/PricingCardWrap/PricingCardWrap';
import RadioGroupWrapper from './components/RadioGroupWrapper/RadioGroupWrapper';
import SearchWrap from './components/SearchWrap/SearchWrap';
import {Section} from './components/Section/Section';
import SignInMessageWrap from './components/SignInMessage/SignInMessageWrap';
import SocialLinksGroup from './components/SocialLinks/SocialLinksGroup';
import Tooltips from './components/Tooltips/Tooltips';
import UserMenus from './components/UserMenus/UserMenus';

import style from './UiKit.module.scss';

const UiKit = () => {
  return (
    <div>
      <h1>UI-kit</h1>
      <MonthPackWrap />
      <PricingWrapper />
      <PackItemWrap />
      <Section title="HTTP request section">
        <div className={style.buttonsWrapper}>
          <GetIconsByCategoryGroup />
          <GetCategoriesButton />
          <GetFeedbacks />
          <GetFaqsButton />
          <GetPricingGroup />
          <GetIconButtons />
          <GetIconsButtons />
          <AuthAction />
        </div>
      </Section>
      <LogoutButton />
      <DownloadOptionsWrapper />
      <PricingFAQs />
      <IconCardWrapper />
      <SearchWrap />
      <SocialLinksGroup />
      <UserMenus />
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
      <PortalWrap />
      <Logos />
      <Section title="ButtonIcons">
        <ButtonIconWrap />
      </Section>
      <FormatsWrap />
    </div>
  );
};

export default UiKit;
