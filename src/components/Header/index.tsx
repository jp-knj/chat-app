import React from 'react';

import { Logo } from '../Logo';
import * as Styled from './styles';
type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Styled.Header>
      <div>
        <Logo height="3em" />
        <Styled.Tools>{children}</Styled.Tools>
      </div>
    </Styled.Header>
  );
};
