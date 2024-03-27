import React, {useState} from 'react';

import {IconSize} from '../../constants';
import PNGDownloadButton from './PNGDownloadButton';
import PNGSizeOptions from './PNGSizeOptions';

interface PNGDownloadSectionProps {
  isPro: boolean;
  isAuthenticated: boolean;
}

const PNGDownloadSection: React.FC<PNGDownloadSectionProps> = ({isAuthenticated, isPro}) => {
  const [selectedPNGSize, setSelectedPNGSize] = useState(IconSize.PX60);

  const handlePNGSizeChange = (size: IconSize): void => {
    setSelectedPNGSize(size);
  };

  return (
    <>
      <PNGDownloadButton
        isAuthenticated={isAuthenticated}
        selectedPNGSize={selectedPNGSize}
      />
      <PNGSizeOptions
        isPro={isPro}
        isAuthenticated={isAuthenticated}
        selectedPNGSize={selectedPNGSize}
        handleClick={handlePNGSizeChange}
      />
    </>
  );
};

export default PNGDownloadSection;
