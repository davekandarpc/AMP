import { AuthenticateUser, AuthEvents, LogoutUser } from "./type";

export const authenticateUser = (): AuthenticateUser => ({
  type: AuthEvents.authenticate,
});

export const logoutUser = (): LogoutUser => ({
  type: AuthEvents.logout,
});

export const authenticateUserSuccess = (user: object) => ({
  type: AuthEvents.authenticateSuccess,
  payload: {
    user,
  },
});

export const authenticateUserFailed = (error: object) => ({
  type: AuthEvents.authenticateFailed,
  payload: {
    error,
  },
});

export const authenticate = (signInData: object) => ({
  type: AuthEvents.AUTHENTICATE_USER,
  payload: {
    signInData
  }
});
