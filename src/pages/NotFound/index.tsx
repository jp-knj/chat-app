import React from 'react';
import * as Styled from './styles';

import { Header } from '../../components/Header';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { NotFoundIcon } from '../NotFoundIcon';

export const NotFound = () => {
  return (
    <Styled.Container>
      <Header>
        <ToggleTheme />
      </Header>

      <Styled.Main>
        <Styled.Title>
          <h1>ページが見つかりません...</h1>
        </Styled.Title>
        <NotFoundIcon />
      </Styled.Main>

      <Toast type="error" className="noAnimation">
        Você vai ser redirecionando para a home!
      </Toast>
    </Styled.Container>
  );
};
