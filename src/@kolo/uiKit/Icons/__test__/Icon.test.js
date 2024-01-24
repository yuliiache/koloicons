import {cleanup, render} from '@testing-library/react';

import Icons from '..';

import {iconWrapperProps} from './testConditions';

const icons = Object.values(Icons);
const {classNames} = iconWrapperProps;

describe('Icon', () => {
  afterEach(cleanup);

  icons.forEach((Icon) => {
    it('should create snapshot successfully', () => {
      const {asFragment} = render(<Icon />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should accept and render className prop', () => {
      const {container} = render(<Icon className={classNames} />);

      expect(container.firstChild).toHaveClass(classNames);
    });
  });
});
