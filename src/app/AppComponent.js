import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {HomePage} from '@kolo/pages/Home/Home';

// import {Header, Footer} from '@kolo/ui-kit';
// HomePage,
// MyAccountPage,
// LoginPage,
// PricingPage,
// IconsPage,
// PolicyDocsComponent,
// ResetPasswordPage,
import 'react-toastify/dist/ReactToastify.css';

// TODO: Replace Header, Footer placeholders
const Header = () => <div>Header placeholder</div>;
const Footer = () => <div>Footer placeholder</div>;

export const AppComponent = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        {/* { <Route path={'/login'} element={<LoginPage isLogin />} />
        <Route path={'/register'} element={<LoginPage />} />
        <Route path={'/pricing'} element={<PricingPage />} />
        <Route path={'/my-account'} element={<MyAccountPage />} />
        <Route path={'/icons'} element={<IconsPage />} />
        <Route path={'/terms-of-service'} element={<PolicyDocsComponent />} />
        <Route path={'/privacy-policy-docs'} element={<PolicyDocsComponent />} />
        <Route path={'/cookie-policy-docs'} element={<PolicyDocsComponent />} />
        <Route path={'/reset-password'} element={<ResetPasswordPage />} />} */}
      </Routes>
      <Footer />
    </>
  );
};
