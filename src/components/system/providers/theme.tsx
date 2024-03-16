import { ThemeProvider } from 'styled-components'

import theme from 'src/config/theme'

const CustomThemeProvider = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default CustomThemeProvider
