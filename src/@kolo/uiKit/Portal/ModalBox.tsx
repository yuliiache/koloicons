import ButtonIcon from '@kolo/uiKit/ButtonIcon/ButtonIcon';
import {ButtonIconType} from '@kolo/uiKit/ButtonIcon/constants';
import Icon from '@kolo/uiKit/Icons';
import {FC, MouseEventHandler, ReactNode} from 'react';
import {createPortal} from 'react-dom';

import {MODAL_BOX_TEST_ID} from './constants';
import styles from './ModalBox.module.scss';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  closeModal: MouseEventHandler<HTMLElement>;
}

const ModalBox: FC<ModalProps> = ({isOpen, children, closeModal}) => {
  if (!isOpen) return null;

  const modalBoxPropagationHandle: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  return createPortal(
    <div
      className={styles.modalOverlay}
      role="dialog"
      data-testid={MODAL_BOX_TEST_ID}
      onClick={closeModal}
    >
      <div
        className={styles.modalBox}
        onClick={modalBoxPropagationHandle}
      >
        <div className={styles.closeButton}>
          <ButtonIcon
            type={ButtonIconType.SQUARE}
            onClick={closeModal}
          >
            <Icon.Close
              width="20px"
              height="20px"
              className={styles.closeIcon}
            />
          </ButtonIcon>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default ModalBox;
