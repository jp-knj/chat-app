import React, { useState } from 'react';
import * as Styled from './../../styles/authPages';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { ToggleTheme } from '../../components/ToggleTheme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Toast } from '../../components/Toast';

import illIcon from '../../assets/images/icon_ill.svg';

export const NewRoom = () => {
  const [newRoom, setNewRoom] = useState('');
  const [newRoomState, setNewRoomState] = useState('not-create');
  const history = useHistory();
  const { user } = useAuth();

  const handleCreateRoom = async (event: React.FormEvent) => {
    event.preventDefault();

    if (user) {
      if (newRoom.trim() === '') {
        setNewRoomState('warning');
        setTimeout(() => {
          setNewRoomState('not-create');
        }, 2000);
        return;
      }

      const roomRef = database.ref('rooms');

      try {
        const firebaseRoom = await roomRef.push({
          title: newRoom,
          authorId: user?.id,
        });
        setNewRoomState('create');
        setTimeout(() => {
          history.push(`/admin/rooms/${firebaseRoom.key}`);
        }, 2100);
      } catch {
        setNewRoomState('error');
      }
    } else {
      setNewRoomState('not-login');
      setTimeout(() => {
        history.push('/');
      }, 2100);
    }
  };

  const roomList = () => {
    history.push(`/rooms`);
  };

  return (
    <Styled.Container>
      <Styled.Left as="aside">
        <img src={illIcon} alt="" />
        <strong>ライブQ＆A部屋をつくろう</strong>
        <p>リアルタイムで回答しよう</p>
      </Styled.Left>

      <Styled.Right as="main">
        <Styled.Content>
          <ToggleTheme />
          <Logo height="3em" />
          <Styled.User>
            <img src={user?.avatar} alt={user?.name} />
            <h2>{user?.name}さん、新しい部屋をつくろう</h2>
          </Styled.User>

          <form onSubmit={handleCreateRoom}>
            <Input
              type="text"
              placeholder="部屋の名前を決めよう"
              value={newRoom}
              onChange={(event) => setNewRoom(event.target.value)}
            />
            <Button btnType="fill" type="submit">
              新しい部屋をつくる
            </Button>
          </form>
          <Button btnType="outline" onClick={roomList}>
            すべての部屋を確認する
          </Button>
          <Styled.LinkRoom>
            すでにあるの部屋に<Link to="/">入る</Link>
          </Styled.LinkRoom>
        </Styled.Content>
      </Styled.Right>
      {newRoomState === 'create' && <Toast type="info">部屋をつくりました!</Toast>}
      {newRoomState === 'warning' && (
        <Toast type="warning">部屋の名前を入力してください！</Toast>
      )}
      {newRoomState === 'error' && (
        <Toast type="error">部屋つくり、失敗しました。もう一度お願いします</Toast>
      )}
      {newRoomState === 'not-login' && <Toast type="error">まず、ログインしよう！</Toast>}
    </Styled.Container>
  );
};
