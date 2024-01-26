import {BillingInterval} from '@kolo/constants/constants';
import getPricing from '@kolo/facade/getPricing/getPricing';
import Button from '@kolo/uiKit/Button/Button';
import {ButtonColor} from '@kolo/uiKit/Button/constants';

const GetPricingGroup = () => {
  const fetchPricing = async (billingInterval) => {
    try {
      const response = await getPricing({billingInterval});
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  //Checking http call for month and year

  const handleClickMonth = () => {
    fetchPricing(BillingInterval.MONTH);
  };

  const handleClickYear = () => {
    fetchPricing(BillingInterval.YEAR);
  };

  return (
    <>
      <Button
        color={ButtonColor.BASIC}
        text={'Billed Monthly'}
        onClick={handleClickMonth}
      />
      <Button
        color={ButtonColor.BASIC}
        text={'Billed Yearly'}
        onClick={handleClickYear}
      />
    </>
  );
};

export default GetPricingGroup;
