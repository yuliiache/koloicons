import {fireEvent, render} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import {BUTTON_ICON_TEST_ID} from '../../ButtonIcon/constants';
import {MODAL_BOX_TEST_ID} from '../constants';
import ModalBox from '../ModalBox';

describe('ModalBox Component', () => {
  const closeModalMock = jest.fn();
  const testChild = <div data-testid="test-child">Hello, World!</div>;

  it('renders children and triggers modalHandler', async () => {
    const {getByTestId} = render(
      <ModalBox
        isOpen={true}
        closeModal={closeModalMock}
      >
        {testChild}
      </ModalBox>
    );

    const modalOverlay = getByTestId(MODAL_BOX_TEST_ID);

    expect(modalOverlay).toBeInTheDocument();

    fireEvent.click(getByTestId(BUTTON_ICON_TEST_ID));

    expect(closeModalMock).toHaveBeenCalled();

    expect(document.body).toMatchSnapshot();
  });
});
