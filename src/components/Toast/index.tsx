import React from 'react';
import { MdError, MdInfo, MdWarning } from 'react-icons/md';

import * as Styled from './styles';

type ToastTypes = {
  children: React.ReactNode;
  type: 'info' | 'error' | 'warning';
  className?: 'animation' | string;
};

export const Toast = (props: ToastTypes) => {
  return (
    <Styled.Container className={`${props.type} ${props.className}`}>
      <p>
        {props.type === 'info' && <MdInfo size={'2.4rem'} />}
        {props.type === 'warning' && <MdWarning size={'2.4rem'} />}
        {props.type === 'error' && <MdError size={'2.4rem'} />}
        {props.children}
      </p>
    </Styled.Container>
  );
};
