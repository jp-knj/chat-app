import React from 'react';
import * as Styled from './styles';
import { useHistory, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { Question } from '../../components/Question';

type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { user, logoutWithGoogle } = useAuth();
  const { questions, title } = useRoom(roomId);
  return (
    <Styled.Container>
      <Header>
        <RoomCode code={roomId} />
        <Button btnType="fill">密室にする</Button>
        <ToggleTheme />
      </Header>
      <Styled.Main>
        <Styled.Left>
          <Styled.Title>
            <h1>Sala: {title}</h1>
            <div>
              <span>{user?.name}</span>
              <Styled.Logout onClick={logoutWithGoogle}>deslogar</Styled.Logout>
            </div>
          </Styled.Title>
        </Styled.Left>
        <Styled.Right>
          <Styled.Cards>
            <Card btnStyle="primary" value={questions?.length || 0} text="質問" />
            <Card
              btnStyle="fill"
              value={questions?.reduce((ac, { likeCount }) => ac + likeCount, 0) || 0}
              text="いいね"
            />
            <Card
              btnStyle="outline"
              value={
                questions?.reduce((ac, { isAnswer }) => {
                  if (isAnswer) return ac + 1;
                  return ac;
                }, 0) || 0
              }
              text="Respondidas"
            />
          </Styled.Cards>
        </Styled.Right>
      </Styled.Main>
    </Styled.Container>
  );
};
