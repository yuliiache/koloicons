import {MonthPack} from '@kolo/pages/Home/components/MonthPack/MonthPack';
import {FC} from 'react';

import {Section} from '../Section/Section';

const MonthPackWrap: FC = () => {
  return (
    <Section title="Month Pack Section">
      <MonthPack />
    </Section>
  );
};

export default MonthPackWrap;
