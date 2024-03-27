import ButtonWithIcon from '@kolo/uiKit/Button/ButtonWitIcon/ButtonWithIcon';
import {ButtonSize} from '@kolo/uiKit/Button/constants';
import Icon from '@kolo/uiKit/Icons';
import React from 'react';

interface SVGButtonProps {
  isPro: boolean;
  handleDownload: () => void;
}

const SVGButton: React.FC<SVGButtonProps> = ({isPro, handleDownload}) => {
  return (
    <ButtonWithIcon
      isDisabled={!isPro}
      onClick={handleDownload}
      text="SVG"
      icon={<Icon.Download />}
      size={ButtonSize.FULL_WIDTH}
    ></ButtonWithIcon>
  );
};

export default SVGButton;
