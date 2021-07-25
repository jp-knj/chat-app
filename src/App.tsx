import React from 'react';
import { ModalProvider } from 'styled-react-modal';

import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import Routes from './routers';
import { ModalBackground } from './styles/modalBackground';

function App() {
  return (
    <ThemeContextProvider>
      <ModalProvider backgroundComponent={ModalBackground}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </ModalProvider>
    </ThemeContextProvider>
  );
}

export default App;
