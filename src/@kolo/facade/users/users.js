import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

export const registerUser = ({email, password, name, lastName}) =>
  httpService.post(ApiEndpoint.USERS, {email, password, name, lastName});

export const getUpdatedUser = () => httpService.get(ApiEndpoint.GET_USER);

export const forgotPasswordRequest = ({email}) =>
  httpService.put(`${ApiEndpoint.FORGOT_PASSWORD_REQUEST}?email=${email}`);

export const resetPassword = ({newPassword, passwordResetToken}) =>
  httpService.put(`${ApiEndpoint.RESET_PASSWORD}?newPassword=${newPassword}&passwordResetToken=${passwordResetToken}`, {
    newPassword,
  });
