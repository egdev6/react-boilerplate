import { Suspense } from 'react'
import ProviderComposer from 'src/lib/provider-composer'
import ThemeProvider from 'components/system/providers/theme'
import RouterProvider from 'components/system/providers/router'
import ReactQueryProvider from 'components/system/providers/react-query'
import AppContextProvider from 'components/system/providers/app-context'

// eslint-disable-next-line react-refresh/only-export-components
export const providers = [AppContextProvider, ThemeProvider, ReactQueryProvider, RouterProvider]

function App() {
  // Suspense is a fix to MDXEditor
  // https://github.com/mdx-editor/editor/issues/185
  return (
    <Suspense fallback={<div></div>}>
      <ProviderComposer with={providers} />
    </Suspense>
  )
}

export default App
