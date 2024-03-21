import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

//annotation for TypeScript to know what to expect and return for registerUser sagas. Remove after migration to ts
/**
 * Registers a new user.
 * @param {{email: string, password: string, name: string, lastName: string}} userDetails - The user's details.
 * @returns {Promise<any>} The response from the registration endpoint.
 */

export const registerUser = ({email, password, name, lastName}) =>
  httpService.post(ApiEndpoint.USERS, {email, password, name, lastName});

export const getUpdatedUser = () => httpService.get(ApiEndpoint.GET_USER);

export const forgotPasswordRequest = ({email}) =>
  httpService.put(`${ApiEndpoint.FORGOT_PASSWORD_REQUEST}?email=${email}`);

export const resetPassword = ({newPassword, passwordResetToken}) =>
  httpService.put(`${ApiEndpoint.RESET_PASSWORD}?newPassword=${newPassword}&passwordResetToken=${passwordResetToken}`, {
    newPassword,
  });
