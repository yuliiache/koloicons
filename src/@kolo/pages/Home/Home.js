import React from 'react';

import FeedbacksList from './components/Feedbacks/FeedbacksList';
import FreePacks from './components/FreePacks/FreePacks';
import Heading from './components/Heading/Heading';
import {MonthPack} from './components/MonthPack/MonthPack';
import useHome from './useHome';

export const HomePage = () => {
  useHome();

  return (
    <>
      <Heading />
      <MonthPack />
      <FeedbacksList />
      <FreePacks />
    </>
  );
};
