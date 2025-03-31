import { type FC, useState, type PropsWithChildren, useContext, useMemo } from 'react';
import AppContext from '@system/context/app-context';

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading, setLoading],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
