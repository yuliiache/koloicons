import getFaqs from '@kolo/facade/getFaqs/getFaqs';
import {Button} from '@kolo/uiKit/Button/Button';
import {FC} from 'react';

import styles from './GetFaqsButton.module.scss';

interface FaqsData {
  answer: string;
  question: string;
}
interface Response {
  data: Array<FaqsData>;
}

const GetFaqsButton: FC = () => {
  const clickHandler = async () => {
    try {
      const {data}: Response = await getFaqs();
      console.log('Faqs: ', data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className={styles.getFaqsWrap}>
      <Button
        color="primary"
        size="small"
        text="Get FAQs"
        onClick={clickHandler}
        isDisabled={false}
        type="button"
      />
    </div>
  );
};

export default GetFaqsButton;
