import {AppRoute} from 'constants/AppRoute';

export const shouldHideNavigationAndMenu = (pathname) => {
  const hiddenPages = [
    AppRoute.LOGIN,
    AppRoute.REGISTER,
    AppRoute.MY_ACCOUNT,
    AppRoute.COOKIE_POLICY,
    AppRoute.PRIVACY_POLICY,
    AppRoute.TERMS_OF_SERVICE,
  ];

  return hiddenPages.includes(pathname);
};
