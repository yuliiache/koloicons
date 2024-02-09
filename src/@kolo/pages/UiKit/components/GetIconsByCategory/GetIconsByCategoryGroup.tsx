import {IconSize, IconStyle} from '@kolo/constants/constants';
import getIconsByCategory from '@kolo/facade/getIconsByCategory/getIconsByCategory';
import Button from '@kolo/uiKit/Button/Button';
import {FC} from 'react';

interface Icon {
  category: {
    name: string;
    number: number;
  };
  name: string;
  size: string;
  style: string;
  _id: string;
}

interface Icons {
  icons: Icon[];
}

interface Response {
  data: Icons;
}

interface Params {
  iconSize: IconSize;
  iconStyle: IconStyle;
  categorySequenceNumber: number;
  categoriesAmount: number;
}

const params: Params = {
  iconSize: IconSize.DETAILED,
  iconStyle: IconStyle.LINE,
  categoriesAmount: 1,
  categorySequenceNumber: 1,
};

const GetIconsByCategoryGroup: FC = () => {
  const onButtonClick = async () => {
    try {
      const {data}: Response = await getIconsByCategory(params);
      console.log('Icons by Category: ', data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <Button
      text={'Get Icons by Categories'}
      onClick={onButtonClick}
    />
  );
};

export default GetIconsByCategoryGroup;
