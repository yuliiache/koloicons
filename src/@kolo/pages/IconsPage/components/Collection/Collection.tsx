import {isAuthenticatedSelector} from '@kolo/pages/LoginPage/selectors';
import ButtonWithIcon from '@kolo/uiKit/Button/ButtonWithIcon/ButtonWithIcon';
import {ButtonColor, ButtonContentPlacement, ButtonSize} from '@kolo/uiKit/Button/constants';
import Icon from '@kolo/uiKit/Icons';
import SignInMessage from '@kolo/uiKit/SignInMessage/SignInMessage';
import {TooltipPlacement} from '@kolo/uiKit/Tooltip/constants';
import Tooltip from '@kolo/uiKit/Tooltip/Tooltip';
import {useAppSelector} from 'app/hooks';
import classnames from 'classnames';
import {FC, useState} from 'react';

import styles from './Collection.module.scss';
import CollectionIconCard from './components/CollectionIconCard';
import {useScrollPositionTrigger} from './hooks/useScrollPositionTrigger';

const iconData = {
  //TODO: Delete dummy data after getting data from store
  category: {
    name: 'Financial',
    number: 7,
    id: '5d45660c241234001664820c',
  },
  name: 'Mobile payment',
  size: '60px',
  style: 'line',
  id: '5d6a87bdef38414cb068e989',
  isFree: false,
};
const dummyList = Array(4).fill(iconData);

const Collection: FC = () => {
  const collectionIconList = dummyList; //TODO: Get CollectionIconList from store
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);
  const [numberAddedToCollection] = useState(4); //TODO: Get numberAddedToCollection = CollectionIconList.length from store
  const isAbsolutePosition = useScrollPositionTrigger();
  const downloadOptionButtonStyles = classnames(styles.downloadOptionButton, {
    [styles.positionAbsolute]: isAbsolutePosition,
  });
  let tooltipLabel = '';

  if (isAuthenticated && numberAddedToCollection === 0) {
    tooltipLabel = 'Add an icon to Collection';
  } else if (!isAuthenticated) {
    tooltipLabel = 'Only for registered users';
  }

  return (
    <div className={styles.collection}>
      {!isAuthenticated && (
        <div className={styles.signIn}>
          <SignInMessage title="Collections" />
        </div>
      )}
      {isAuthenticated && (
        <>
          <div className={styles.collectionIconList}>
            {collectionIconList.map((iconData, index) => (
              <CollectionIconCard
                key={`${iconData.name}${index}`} // TODO:Delete index from key after adding collection selector
                icon={{
                  name: iconData.name,
                  style: iconData.style,
                  size: iconData.size,
                  id: iconData.id,
                }}
                categoryNumber={iconData.category.number}
                categoryName={iconData.category.name}
                isFree={iconData.isFree}
              />
            ))}
          </div>
        </>
      )}
      <Tooltip
        id={tooltipLabel}
        label={tooltipLabel}
        placement={TooltipPlacement.TOP}
      >
        <div className={downloadOptionButtonStyles}>
          <ButtonWithIcon
            text="Download options"
            isDisabled={numberAddedToCollection > 0 ? false : true}
            icon={<Icon.Up className={styles.upIcon} />}
            size={ButtonSize.FULL_WIDTH}
            placement={ButtonContentPlacement.RIGHT}
            color={ButtonColor.PRIMARY}
            isDownloadOptionButton
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default Collection;
