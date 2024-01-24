import {cleanup, render} from '@testing-library/react';

import {makeIcon} from '../makeIcon';
import {IconInstance} from '../sources';

import {iconWrapperProps} from './testConditions';

const {classNames, height, viewBox, width} = iconWrapperProps;

const icons = Object.values(IconInstance);

describe('makeIcon', () => {
  afterEach(cleanup);

  icons.forEach((Icon) => {
    const IconWrapper = makeIcon(Icon, {...iconWrapperProps});

    it('should successfully create snapshot', () => {
      const {asFragment} = render(<IconWrapper />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should accept and render className prop', () => {
      const {container} = render(<IconWrapper className={classNames} />);

      expect(container.firstChild).toHaveClass(classNames);
    });

    it('should accept and render height prop', () => {
      const {container} = render(<IconWrapper height={height} />);

      expect(container.firstChild).toHaveAttribute('height', height);
    });

    it('should accept and render  width prop', () => {
      const {container} = render(<IconWrapper width={width} />);

      expect(container.firstChild).toHaveAttribute('width', width);
    });

    it('should accept and render viewBox prop', () => {
      const {container} = render(<IconWrapper viewBox={viewBox} />);

      expect(container.firstChild).toHaveAttribute('viewBox', viewBox);
    });
  });
});
