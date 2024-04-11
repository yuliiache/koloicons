import {packItemSelector} from '@kolo/pages/Home/components/PackItem/selectors';
import {getPackStartAction} from '@kolo/pages/Home/components/PackItem/slice/packItemSlice';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const usePackItemHelper = () => {
  const dispatch = useDispatch();
  const packItems = useSelector(packItemSelector);

  useEffect(() => {
    dispatch(getPackStartAction());
  }, [dispatch]);
  return {packItems};
};
