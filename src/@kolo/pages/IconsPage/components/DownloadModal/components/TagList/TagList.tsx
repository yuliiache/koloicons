import {SEARCH_QUERY} from '@kolo/constants/constants';
import {addQueryParams} from '@kolo/services/helpers/urls';
import {TooltipPlacement} from '@kolo/uiKit/Tooltip/constants';
import Tooltip from '@kolo/uiKit/Tooltip/Tooltip';
import {ApiEndpoint} from 'constants/ApiEndpoint';
import {useLocation, useNavigate} from 'react-router-dom';

import styles from './TagList.module.scss';

export const TagList = ({tags}: {tags?: string[]}) => {
  const navigate = useNavigate();
  const {search} = useLocation();
  const lastTag = tags && tags.length - 1;

  const tagQueryHandle = (tagName: string) => {
    navigate({
      pathname: ApiEndpoint.ICONS,
      search: addQueryParams(search, {
        [SEARCH_QUERY]: tagName,
      }),
    });
  };

  return (
    <ul className={styles.iconTags}>
      {tags &&
        tags.map((tag, index) => (
          <Tooltip
            label="Search by tag"
            key={tag}
            placement={TooltipPlacement.BOTTOM}
          >
            <li
              className={styles.tagItem}
              onClick={() => tagQueryHandle(tag)}
              role="link"
            >{`#${tag}${index !== lastTag ? ',' : ''}`}</li>
          </Tooltip>
        ))}
    </ul>
  );
};
export default TagList;
