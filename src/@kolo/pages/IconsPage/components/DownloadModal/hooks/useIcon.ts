import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getIconStart} from '../iconSlice';
import {IconSelector} from '../selectors';

const useIcon = (iconId: string) => {
  const icon = useSelector(IconSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIconStart(iconId));
  }, [dispatch, iconId]);

  return {icon};
};

export default useIcon;
