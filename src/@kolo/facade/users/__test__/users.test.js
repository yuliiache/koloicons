import {httpService} from '@kolo/services/httpService/httpService';
import {ApiEndpoint} from 'constants/ApiEndpoint';

import {forgotPasswordRequest, getUpdatedUser, registerUser, resetPassword} from '../users';
jest.mock('@kolo/services/httpService/httpService', () => ({
  httpService: {
    post: jest.fn(),
    get: jest.fn(),
    put: jest.fn(),
  },
}));

describe('Authentication API functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('registerUser sends correct data to server', async () => {
    const userData = {email: 'test@example.com', password: 'password', name: 'Test', lastName: 'User'};
    await registerUser(userData);
    expect(httpService.post).toHaveBeenCalledWith(ApiEndpoint.USERS, userData);
  });

  test('getUpdatedUser sends request to correct endpoint', async () => {
    await getUpdatedUser();
    expect(httpService.get).toHaveBeenCalledWith(ApiEndpoint.GET_USER);
  });

  test('forgotPasswordRequest sends correct data to server', async () => {
    const email = 'test@example.com';
    await forgotPasswordRequest({email});
    expect(httpService.put).toHaveBeenCalledWith(`${ApiEndpoint.FORGOT_PASSWORD_REQUEST}?email=${email}`);
  });

  test('resetPassword sends correct data to server', async () => {
    const newPassword = 'newPassword123';
    const passwordResetToken = 'xxxxxxxxxx';
    await resetPassword({newPassword, passwordResetToken});
    expect(httpService.put).toHaveBeenCalledWith(
      `${ApiEndpoint.RESET_PASSWORD}?newPassword=${newPassword}&passwordResetToken=${passwordResetToken}`,
      {newPassword}
    );
  });
});
