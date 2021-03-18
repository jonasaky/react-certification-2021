import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useGlobal } from '../../providers/Global';

import { Main } from './styled';

function Layout({ children }) {
  const { state } = useGlobal();
  const { theme } = state;

  return (
    <ThemeProvider theme={theme}>
      <Main>{children}</Main>
    </ThemeProvider>);
}

export default Layout;
