import {AuthState} from './AuthContext';

export type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        username: undefined,
        favoriteIcon: undefined,
        isLoggedIn: false,
      };
    case 'changeName':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
