import React from 'react';

export interface userData {
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
}

export interface UserDataContextValue {
  user: userData | null;
  setUserData: React.Dispatch<React.SetStateAction<userData | null>>
}
