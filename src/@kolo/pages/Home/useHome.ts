import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {getFreePacksStartAction} from './components/FreePacks/slice/freePacksSlice';

const useHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFreePacksStartAction());
  }, [dispatch]);
  return;
};

export default useHome;
