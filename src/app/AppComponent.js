import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {HomePage} from '@kolo/pages/Home/Home';
import IconsPage from '@kolo/pages/IconsPage/IconsPage';
import RegisterPage from '@kolo/pages/RegisterPage/RegisterPage';
import Footer from '@kolo/uiKit/Footer/Footer';
import Header from '@kolo/uiKit/Header/Header';
import {AppRoute} from 'constants/AppRoute';

import MyAccountPage from '../@kolo/pages/MyAccountPage';

import 'react-toastify/dist/ReactToastify.css';
import styles from './AppComponent.module.scss';
// import {Header, Footer} from '@kolo/ui-kit';
// HomePage,
// MyAccountPage,
// LoginPage,
// PricingPage,
// IconsPage,
// PolicyDocsComponent,
// ResetPasswordPage,

// TODO: Replace Header, Footer placeholders
//const Header = () => <div>Header placeholder</div>;
// const Footer = () => <div>Footer placeholder</div>;

const UiKit = lazy(() => import('@kolo/pages/UiKit/UiKit'));
const LoginPage = lazy(() => import('@kolo/pages/LoginPage/LoginPage'));
const PricingPage = lazy(() => import('@kolo/pages/PricingPage/PricingPage'));
const ResetPasswordPage = lazy(() => import('@kolo/pages/ResetPasswordPage/ResetPasswordPage'));

export const AppComponent = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Suspense fallback={<div className={styles.loadingContainer}>...Loading</div>}>
        <Routes>
          <Route
            path={AppRoute.HOME}
            element={<HomePage />}
          />
          <Route
            path={AppRoute.UI_KIT}
            element={<UiKit />}
          />
          <Route
            path={AppRoute.MY_ACCOUNT}
            element={<MyAccountPage />}
          />
          <Route
            path={AppRoute.ICONS}
            element={<IconsPage />}
          />
          <Route
            path={AppRoute.LOGIN}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.REGISTER}
            element={<RegisterPage />}
          />
          <Route
            path={AppRoute.PRICING}
            element={<PricingPage />}
          />
          <Route
            path={AppRoute.RESET_PASSWORD}
            element={<ResetPasswordPage />}
          />
          {/* { <Route path={'/login'} element={<LoginPage isLogin />} />
        <Route path={'/register'} element={<LoginPage />} />
        <Route path={'/pricing'} element={<PricingPage />} />
        
        <Route path={'/terms-of-service'} element={<PolicyDocsComponent />} />
        <Route path={'/privacy-policy-docs'} element={<PolicyDocsComponent />} />
        <Route path={'/cookie-policy-docs'} element={<PolicyDocsComponent />} />
       } */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};
