import React, { useState } from 'react';
import { CgDarkMode } from 'react-icons/cg';

import { Toast } from '../Toast';
import { useTheme } from './../../hooks/useTheme';
import * as Styled from './styles';

export const ToggleTheme = () => {
  const { toggleTheme, isLight } = useTheme();
  const [theme, setTheme] = useState('hidden');
  const handleClick = () => {
    setTheme('switch');
    toggleTheme();
    setTimeout(() => {
      setTheme('hidden');
    }, 2000);
  };
  return (
    <Styled.Container>
      {theme === 'switch' && (
        <Toast type="info"> {isLight ? 'Light' : 'Dark'}モードに変更しました!</Toast>
      )}
      <Styled.Button title="Switch Theme" onClick={handleClick}>
        <CgDarkMode />
      </Styled.Button>
    </Styled.Container>
  );
};
