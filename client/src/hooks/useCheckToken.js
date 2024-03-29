import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TOKEN } from '../app.constants.js';

import { useAuth } from './useAuth.js';

export const useCheckToken = () => {
  const { setIsAuth, isAuth } = useAuth();

  const { pathname } = useLocation();

  useEffect(() => {
    const token = Cookies.get(TOKEN);
    if (!token) setIsAuth(false);
  }, [pathname, isAuth]);
};
