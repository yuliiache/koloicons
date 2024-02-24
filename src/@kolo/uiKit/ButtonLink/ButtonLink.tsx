import {FC} from 'react';
import {Link as InternalLink} from 'react-router-dom';

import Button from '../Button/Button';
import {ButtonProps} from '../Button/Button';
import {ButtonColor, ButtonSize} from '../Button/constants';
import {BUTTONLINK_TEST_ID} from './constants';

interface ButtonLinkProps extends ButtonProps {
  url: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  url,
  text,
  isDisabled,
  children,
  color = ButtonColor.PRIMARY,
  size = ButtonSize.SMALL,
}) => {
  const isInternalUrl: boolean = url.startsWith('/');

  if (isInternalUrl) {
    return (
      <InternalLink
        to={url}
        data-testid={BUTTONLINK_TEST_ID}
      >
        <Button
          text={text}
          isDisabled={isDisabled}
          color={color}
          size={size}
        >
          {children}
        </Button>
      </InternalLink>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      data-testid={BUTTONLINK_TEST_ID}
    >
      <Button
        text={text}
        isDisabled={isDisabled}
        color={color}
        size={size}
      >
        {children}
      </Button>
    </a>
  );
};
export default ButtonLink;
