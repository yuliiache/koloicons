import {CATEGORY_ID} from '@kolo/constants/constants';
import IconCardButton from '@kolo/pages/IconsPage/components/IconCardButton/IconCardButton';
import {isAuthenticatedSelector} from '@kolo/pages/LoginPage/selectors';
import {addQueryParams} from '@kolo/services/helpers/urls';
import {AdaptiveImage} from '@kolo/uiKit/AdaptiveImage/AdaptiveImage';
import Button from '@kolo/uiKit/Button/Button';
import {ButtonColor, ButtonSize} from '@kolo/uiKit/Button/constants';
import ColorPicker from '@kolo/uiKit/ColorPicker/ColorPicker';
import Icon from '@kolo/uiKit/Icons';
import {useAppSelector} from 'app/hooks';
import {ApiEndpoint} from 'constants/ApiEndpoint';
import {FC} from 'react';
import {useLocation, useNavigate} from 'react-router';

import useIcon from '../../hooks/useIcon';
import {ModalIconProps} from '../../types/DownloadModalProps';
import TagList from '../TagList/TagList';
import styles from './DownloadModalIcon.module.scss';

const DownloadModalIcon: FC<ModalIconProps> = ({iconId, isFree}) => {
  const {icon} = useIcon(iconId);
  const navigate = useNavigate();
  const {search} = useLocation();
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  const iconsFromCategoryHandler = (categoryId: string) => {
    navigate({
      pathname: ApiEndpoint.ICONS,
      search: addQueryParams(search, {
        [CATEGORY_ID]: categoryId,
      }),
    });
  };

  return (
    <div className={styles.modalIcon}>
      <div className={styles.modalIconHead}>
        <h2 className={styles.modalHeadTitle}>{icon.name}</h2>
        <div className={styles.modalColorPicker}>
          <ColorPicker onChange={() => null} />
        </div>
        {isAuthenticated && <IconCardButton iconId={iconId} />}
      </div>
      <TagList tags={icon.tags} />
      <div className={styles.modalIconImage}>
        <AdaptiveImage
          icon={icon}
          categoryNumber={icon.category.number}
          categoryName={icon.category.name}
          isFree={isFree}
          withWatermark={true}
        />
      </div>
      <div className={styles.modalIconFooter}>
        <div className={styles.modalIconFooterCategory}>
          <Icon.Folder />
          <h3 className={styles.modalIconFooterCategoryName}>{icon.category.name}</h3>
        </div>
        <Button
          text="Show icons from this category"
          color={ButtonColor.BASIC}
          size={ButtonSize.FULL_WIDTH}
          onClick={() => iconsFromCategoryHandler(icon.category.id)}
        />
      </div>
    </div>
  );
};

export default DownloadModalIcon;
