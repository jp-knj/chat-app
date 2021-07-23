import React from 'react';
import * as Styled from './styles';

type BadgeProps = {
  children: React.ReactNode;
  type: 'info' | 'error' | 'warning';
};

export const Badge: React.FC<BadgeProps> = ({ children, type }) => {
  return <Styled.Container className={type}>{children}</Styled.Container>;
};
