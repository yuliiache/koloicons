import React from 'react';

import FeedbacksList from './components/Feedbacks/FeedbacksList';
import Heading from './components/Heading/Heading';
import {MonthPack} from './components/MonthPack/MonthPack';

export const HomePage = () => {
  return (
    <>
      <Heading />
      <MonthPack />
      <FeedbacksList />
    </>
  );
};
