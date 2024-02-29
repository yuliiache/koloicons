import UnlockAllFormats from '@kolo/components/UnlockAllFormats/UnlockAllFormats';
import React from 'react';

import {Section} from '../Section/Section';

const FormatsWrap = () => {
  const price = 2.5;

  return (
    <Section title="Unlock all formats section">
      <div
        style={{width: '240px'}}
        className="wrap"
      >
        <UnlockAllFormats price={price} />
      </div>
    </Section>
  );
};

export default FormatsWrap;
