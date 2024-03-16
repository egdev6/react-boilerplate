import { AppContextProvider } from 'src/hooks/use-app-context'

const CustomAppContextProvider = ({ children }: React.PropsWithChildren) => (
  <AppContextProvider>{children}</AppContextProvider>
)

export default CustomAppContextProvider
