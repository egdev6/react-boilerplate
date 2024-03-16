import { FC, useState, PropsWithChildren, useContext, useMemo } from 'react'
import AppContext from 'components/system/context/app-context'

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const value = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading, setLoading]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext)
}
