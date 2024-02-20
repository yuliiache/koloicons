import Button from '@kolo/uiKit/Button/Button';
import ModalBox from '@kolo/uiKit/Portal/ModalBox';
import useModal from '@kolo/uiKit/Portal/useModalBox';
import {FC} from 'react';

import SignInMessageWrap from '../SignInMessage/SignInMessageWrap';

const PortalWrap: FC = () => {
  const {openModal, isOpen, closeModal} = useModal();

  return (
    <>
      <Button
        text="Open Modal"
        onClick={openModal}
      />
      {
        <ModalBox
          isOpen={isOpen}
          closeModal={closeModal}
        >
          <SignInMessageWrap />
        </ModalBox>
      }
    </>
  );
};

export default PortalWrap;
