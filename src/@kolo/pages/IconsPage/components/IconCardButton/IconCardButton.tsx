import ButtonIcon from '@kolo/uiKit/ButtonIcon/ButtonIcon';
import {ButtonIconType} from '@kolo/uiKit/ButtonIcon/constants';
import Icon from '@kolo/uiKit/Icons';
import {FC} from 'react';

import useIconCard from '../IconCard/hooks/useIconCard';

interface Props {
  iconId?: string;
}

const IconCardButton: FC<Props> = ({iconId}) => {
  const {isAdded, handleClick} = useIconCard();
  const actionIcon = isAdded ? <Icon.Close /> : <Icon.Add />;
  const tooltipLabel = isAdded ? 'Remove from collection' : 'Add to collection';

  return (
    <ButtonIcon
      id={iconId}
      type={ButtonIconType.ROUND}
      tooltipLabel={tooltipLabel}
      onClick={handleClick}
    >
      {actionIcon}
    </ButtonIcon>
  );
};

export default IconCardButton;
