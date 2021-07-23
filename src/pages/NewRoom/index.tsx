import React from 'react';
import * as Styled from './../../styles/authPages';
import { Link } from 'react-router-dom';

import { ToggleTheme } from '../../components/ToggleTheme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Toast } from '../../components/Toast';

import illIcon from '../../assets/images/icon_ill.svg';

export const NewRoom = () => {
  return (
    <Styled.Container>
      <Styled.Left as="aside">
        <img src={illIcon} alt="" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as suas dúvidas da sua audiência em tempo-real</p>
      </Styled.Left>

      <Styled.Right as="main">
        <Styled.Content>
          <ToggleTheme />
          <Logo height="3em" />
          <Styled.User>
            <h2>
              knjさん、新しい部屋を
              <br />
              作成してください
            </h2>
          </Styled.User>

          <form>
            <Input type="text" placeholder="Nome da sala" />
            <Button btnType="fill" type="submit">
              新しい部屋をつくる
            </Button>
          </form>
          <Button btnType="outline">Verificar todas as salas</Button>
          <Styled.LinkRoom>
            すでにあるの部屋に<Link to="/">入る</Link>
          </Styled.LinkRoom>
        </Styled.Content>
      </Styled.Right>
    </Styled.Container>
  );
};
