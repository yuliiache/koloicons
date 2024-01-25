import {IconSize, IconStyle} from '@kolo/constants/constants';
import {getCategories} from '@kolo/facade/getCategories/getCategories';
import {Button} from '@kolo/uiKit/Button/Button';
import {FC} from 'react';

interface CategoriesData {
  iconsAmount: {
    size48: number;
    size60: number;
  };
  name: string;
  styles: string[];
  _id: string;
}

interface Response {
  data: CategoriesData[];
}

interface Params {
  iconSize: IconSize;
  iconStyle: IconStyle;
}

const params: Params = {
  iconSize: IconSize.DETAILED,
  iconStyle: IconStyle.LINE,
};

const GetCategoriesButton: FC = () => {
  const onButtonClick = async () => {
    try {
      const {data}: Response = await getCategories(params);

      console.log('Categories: ', data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <Button
      text="Get categories"
      onClick={onButtonClick}
      isDisabled={false}
    />
  );
};

export default GetCategoriesButton;
