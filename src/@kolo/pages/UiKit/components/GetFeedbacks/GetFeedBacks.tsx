import {getFeedbacks} from '@kolo/facade/getFeedbacks/getFeedbacks';
import type {Feedbacks} from '@kolo/facade/getFeedbacks/types';
import Button from '@kolo/uiKit/Button/Button';

const GetFeedbacks = () => {
  const handleOnClick = async () => {
    try {
      const response = await getFeedbacks();

      const {data}: {data: Feedbacks} = response;

      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <Button
      text="Get Feedbacks!"
      onClick={handleOnClick}
    />
  );
};

export default GetFeedbacks;
