import React from 'react';
import * as Styled from './styles';

import { Logo } from '../Logo';
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
