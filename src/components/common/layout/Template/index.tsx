import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles';
import theme from 'styles/theme';
import { Meta } from 'common/layout';

import { Container } from './styled';

export const Template: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta />
      <Container>
        {children}
      </Container>
    </ThemeProvider>
  );
};
