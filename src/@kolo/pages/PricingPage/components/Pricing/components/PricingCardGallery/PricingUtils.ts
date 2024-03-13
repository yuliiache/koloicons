import {LabelTheme} from '@kolo/uiKit/Label/constants';

import {Currency, SubscriptionPlan} from '../../constants';

const LabelThemes = {
  [SubscriptionPlan.PERSONAL]: LabelTheme.SUCCESS,
  [SubscriptionPlan.BUSINESS]: LabelTheme.PRIMARY,
  [SubscriptionPlan.EXTENDED]: LabelTheme.WARNING,
};

export const getThemeForPlan = (plan: SubscriptionPlan): LabelTheme => {
  return LabelThemes[plan] || LabelTheme.DEFAULT;
};

const CurrencySymbol = {
  [Currency.USD]: '$',
  [Currency.EUR]: '€',
} as const;

export const formatPrice = (price: number, currencyCode: Currency): string => {
  const currencySymbol = CurrencySymbol[currencyCode];
  const formattedPrice = price.toFixed(2);

  return `${currencySymbol}${formattedPrice}`;
};
