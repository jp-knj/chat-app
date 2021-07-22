import React from 'react';
import * as Styled from './styles';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Styled.Header>
      <div>
        <Styled.Tools>{children}</Styled.Tools>
      </div>
    </Styled.Header>
  );
};
