import { createContext } from 'react';

const AppContext = createContext({
  authenticate: false,
  login: () => {},
  logout: () => {},
});

export default AppContext;
