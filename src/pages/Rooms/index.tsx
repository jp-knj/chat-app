import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { RoomCard } from '../../components/RoomCard';
import { ToggleTheme } from '../../components/ToggleTheme';
import { useRooms } from '../../hooks/useRooms';
import * as Styled from './styles';

export const Rooms = () => {
  const history = useHistory();
  const { rooms } = useRooms();

  const openRooms = rooms.filter((room) => !room.endeAt);

  return (
    <Styled.Container>
      <Header>
        <ToggleTheme />
      </Header>
      <Styled.Main>
        <Styled.Left>
          <Styled.Title>
            <h1>お部屋:</h1>
            <Button btnType="outline" onClick={() => history.push('/rooms/new')}>
              部屋をつくる
            </Button>
          </Styled.Title>
          <Styled.Rooms>
            {rooms.map((room) => {
              return (
                <RoomCard
                  key={room.id}
                  title={room.name}
                  endeAt={room.endeAt}
                  code={room.id}
                />
              );
            })}
          </Styled.Rooms>
        </Styled.Left>
        <Styled.Right>
          <Styled.Cards>
            <Card btnStyle="primary" value={rooms.length} text="部屋の数" />
            <Card btnStyle="fill" value={openRooms.length} text="OPEN!" />
            <Card
              btnStyle="outline"
              value={rooms.length - openRooms.length}
              text="CLOSED!"
            />
          </Styled.Cards>
        </Styled.Right>
      </Styled.Main>
    </Styled.Container>
  );
};
