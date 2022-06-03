import { createContext } from 'react';

// mimic useState hook
const ThemeContext = createContext(['green', () => {}]);

export default ThemeContext;
