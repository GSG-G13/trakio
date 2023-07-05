import { useEffect, useState, useMemo } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { userData } from '../interfaces/userData';
import userContext from './context';

const AuthContext = ({ children }: { children: any }) => {
  const [user, setUserData] = useState<userData | null>(null);

  useEffect(() => {
    axios
      .get('/api/user')
      .then((res) => {
        setUserData(res.data.userData);
      })
      .catch(() => {
        Cookie.remove('token');
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      setUserData,
    }),
    [user, setUserData],
  );

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
};

export default AuthContext;
