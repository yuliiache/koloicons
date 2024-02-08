import {IconSize, IconStyle} from '@kolo/constants/constants';
import {getIcons} from '@kolo/facade/getIcons/getIcons';
import Button from '@kolo/uiKit/Button/Button';
import {FC} from 'react';

interface Icon {
  categories: {
    name: string;
    number: number;
  };
  name: string;
  size: string;
  style: string;
  _id: string;
}

interface Response {
  data: {
    icons: Icon[];
    iconsLength: string;
  };
}

interface Params {
  currentPage: string;
  pageSize: string;
  categoryId: string;
  searchQuery: string;
  isFree: string;
  iconSize: IconSize;
  iconStyle: IconStyle;
}

interface Config {
  text: string;
  params: Params;
  responseName: string;
}

const defaultParams: Params = {
  pageSize: '',
  currentPage: '',
  categoryId: '',
  searchQuery: '',
  isFree: '',
  iconSize: IconSize.DETAILED,
  iconStyle: IconStyle.LINE,
};

const getIconButtonsConfig: Config[] = [
  {text: 'Get icons: all', params: defaultParams, responseName: 'Get all icons:'},
  {
    text: 'Get icons: free',
    params: {...defaultParams, isFree: 'true'},
    responseName: 'Get free icons:',
  },
  {
    text: 'Get icons: by query',
    params: {...defaultParams, pageSize: '24', currentPage: '1', searchQuery: 'world'},
    responseName: 'Get 24 icons per page by search query "world":',
  },
  {
    text: 'Get icons: by category id',
    params: {...defaultParams, categoryId: '5d45660c2412340016648231'},
    responseName: 'Get icons by category id. It should be "360 degrees" category:',
  },
];

const GetIconsButtons: FC = () => {
  const fetchIcons = async (params: Params, responseName: string) => {
    try {
      const {data}: Response = await getIcons({...params});

      console.log(`${responseName}`, data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleClick = (params: Params, responseName: string) => {
    fetchIcons(params, responseName);
  };

  return (
    <>
      {getIconButtonsConfig.map(({text, params, responseName}) => {
        return (
          <Button
            key={text}
            text={text}
            onClick={() => handleClick(params, responseName)}
          />
        );
      })}
    </>
  );
};

export default GetIconsButtons;
