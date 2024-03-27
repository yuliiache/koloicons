import DownloadOptions from '@kolo/pages/IconsPage/components/DownloadOptions/DownloadOptions';

import {Section} from '../Section/Section';

const DownloadOptionsWrapper = () => {
  return (
    <Section title={'DownloadOptions'}>
      <div style={{width: '240px'}}>
        <p>Non Authenticated</p>
        <DownloadOptions
          isAuthenticated={false}
          isPro={false}
        />
        <br />
        <p>Authenticated</p>
        <DownloadOptions
          isAuthenticated={true}
          isPro={false}
        />
        <br />
        <p>Pro</p>
        <DownloadOptions
          isAuthenticated={true}
          isPro={true}
        />
      </div>
    </Section>
  );
};

export default DownloadOptionsWrapper;
