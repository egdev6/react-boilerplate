import { createContext } from 'react';
import type { AppContextValue } from '@models/context';

const AppContext = createContext<AppContextValue>({} as AppContextValue);

export default AppContext;
