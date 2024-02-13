import HelpLinks from '@kolo/uiKit/HelpLinks/HelpLinks';
import SocialLinks from '@kolo/uiKit/SocialLinks/SocialLinks';
import React from 'react';

import style from './Footer.module.scss';

const {footer, copyright} = style;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footer}>
      <p className={copyright}>Copyright © {currentYear} KOLO ICONS</p>
      <HelpLinks />
      <SocialLinks />
    </footer>
  );
};

export default Footer;
