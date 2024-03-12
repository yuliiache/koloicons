import {AUTH_TOKEN_HEADER_KEY} from '@kolo/constants/constants';
import {forgotPasswordRequest, getUpdatedUser, registerUser, resetPassword} from '@kolo/facade/users/users';
import {httpService} from '@kolo/services/httpService/httpService';
import Button from '@kolo/uiKit/Button/Button';

const AuthAction = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  const passwordResetToken = urlSearchParams.get('passwordResetToken');

  const handleAuthAction = async (facadeFunction, params) => {
    const response = await facadeFunction(params);
    const token = response.headers[AUTH_TOKEN_HEADER_KEY];
    if (token) httpService.addJwtToHeader(token);
  };

  return (
    <>
      <Button
        text="Register User"
        onClick={() =>
          handleAuthAction(registerUser, {
            email: 'vokoloven@gmail.com',
            password: 'vokoloven123',
            name: 'voko',
            lastName: 'voko',
          })
        }
      />
      <Button
        text="Get Update User"
        onClick={() => handleAuthAction(getUpdatedUser)}
      />
      <Button
        text="Forgot Password Request"
        onClick={() => handleAuthAction(forgotPasswordRequest, {email: 'vokoloven@gmail.com'})}
      />
      <Button
        text="Reset Password"
        onClick={() => handleAuthAction(resetPassword, {newPassword: 'qwerty77', passwordResetToken})}
      />
    </>
  );
};

export default AuthAction;
