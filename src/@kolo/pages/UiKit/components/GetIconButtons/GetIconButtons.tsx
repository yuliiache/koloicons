import {IconStyle} from '@kolo/constants/constants';
import getIcon from '@kolo/facade/getIcon/getIcon';
import {Icon, Params} from '@kolo/facade/getIcon/types';
import Button from '@kolo/uiKit/Button/Button';
import {FC} from 'react';

import styles from './GetIconButtons.module.scss';

interface Response {
  data: Icon;
}

const defaultParams: Params = {
  iconId: '5d6a87bdef38414cb068e989',
  withTags: 'withTags',
  iconStyle: IconStyle.LINE,
};

const GetIconButtons: FC = () => {
  const fetchIcon = async (params: Params) => {
    try {
      const {data}: Response = await getIcon({...params});
      console.log('Icon: ', JSON.stringify(data));
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const getIconWithTagsHandle = () => {
    fetchIcon(defaultParams);
  };

  const getIconWithoutTagsHandle = () => {
    fetchIcon({...defaultParams, withTags: ''});
  };

  return (
    <div className={styles.getIconWrap}>
      <Button
        text="Get Icon with Tags"
        onClick={getIconWithTagsHandle}
        isDisabled={false}
      />
      <Button
        text="Get Icon without Tags"
        onClick={getIconWithoutTagsHandle}
        isDisabled={false}
      />
    </div>
  );
};

export default GetIconButtons;
