import React from 'react';
import * as Styled from './styles';

import { Header } from '../../components/Header';
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { RoomCard } from '../../components/RoomCard';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router-dom';

export const Rooms = () => {
  return (
    <Styled.Container>
      <Header>
        <ToggleTheme />
      </Header>

      <Styled.Main>
        <Styled.Left>
          <Styled.Title>
            <h1>Salas:</h1>
            <Button btnType="outline">部屋をつくる</Button>
          </Styled.Title>

          <Styled.Rooms>
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </Styled.Rooms>
        </Styled.Left>

        <Styled.Right>
          <Styled.Cards>
            <Card btnStyle="primary" text="部屋の数" />
            <Card btnStyle="fill" text="OPEN!" />
            <Card btnStyle="outline" text="CLOSED!" />
          </Styled.Cards>
        </Styled.Right>
      </Styled.Main>
    </Styled.Container>
  );
};
