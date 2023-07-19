import { useEffect, useState, useMemo } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import { LinearProgress, Box } from '@mui/material';
import { userData } from '../interfaces/userData';
import userContext from './context';

const AuthContext = ({ children }: { children: any }) => {
  const [user, setUserData] = useState<userData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('/api/user')
      .then((res) => {
        setLoading(false);
        setUserData(res.data.userData);
      })
      .catch(() => {
        setLoading(false);
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
    <userContext.Provider value={contextValue}>
      {loading ? (
        <Box width="30%" marginX="auto" marginY="35vh" display="flex" flexDirection="column" alignItems="center">
          <Box component="img" src="/assets/logo.svg" width="100px" height="100px" />
          <LinearProgress sx={{ width: '70%' }} />
        </Box>
      ) : (
        children
      )}
    </userContext.Provider>
  );
};

export default AuthContext;
