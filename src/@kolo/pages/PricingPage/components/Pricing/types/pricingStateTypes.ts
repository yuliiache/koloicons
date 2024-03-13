import {Currency, SubscriptionPlan} from '../constants';
export interface PricingState {
  isLoading: boolean;
  pricingPlans: PricingData[];
}

export interface PricingData {
  subscriptionPlan: SubscriptionPlan;
  paymentId: number;
  features: string[];
  options: PricingOptions;
  license: PricingLicense;
}

interface PricingOptions {
  price: number;
  currency: Currency;
  period: string;
}

interface PricingLicense {
  allowed: string[];
  disallowed: string[];
}
