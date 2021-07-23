import React from 'react';
import * as Styled from './styles';

import { CgDarkMode } from 'react-icons/cg';

export const ToggleTheme = () => {
  return (
    <Styled.Container>
      <Styled.Button title="Switch Theme">
        <CgDarkMode />
      </Styled.Button>
    </Styled.Container>
  );
};
