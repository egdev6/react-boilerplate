import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from 'config/react-query'
import { CharactersProvider } from 'src/hooks/use-characters'

const CustomQueryClientProvider = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <CharactersProvider>{children}</CharactersProvider>
  </QueryClientProvider>
)

export default CustomQueryClientProvider
