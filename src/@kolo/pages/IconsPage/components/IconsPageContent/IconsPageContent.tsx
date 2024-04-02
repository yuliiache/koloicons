import classNames from 'classnames';
import {FC, ReactElement} from 'react';

import styles from './IconsPageContent.module.scss';

interface Props {
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  LeftAsideContent: ReactElement;
  RightAsideContent: ReactElement;
  children?: ReactElement;
}

const IconsPageContent: FC<Props> = ({
  isLeftPanelOpen,
  isRightPanelOpen,
  LeftAsideContent,
  RightAsideContent,
  children,
}) => {
  const asideRightClasses = classNames(styles.asideContent, {[styles.asideContentRight]: isRightPanelOpen});
  const contentClasses = classNames(
    styles.content,
    {[styles.contentOnSide]: isLeftPanelOpen || isRightPanelOpen},
    {[styles.contentInCenter]: isLeftPanelOpen && isRightPanelOpen}
  );

  return (
    <div className={styles.contentSection}>
      {isLeftPanelOpen && <aside className={styles.asideContent}>{LeftAsideContent}</aside>}
      <div className={contentClasses}>{children}</div>
      {isRightPanelOpen && <aside className={asideRightClasses}>{RightAsideContent}</aside>}
    </div>
  );
};

export default IconsPageContent;
