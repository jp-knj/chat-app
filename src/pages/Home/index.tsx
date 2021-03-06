import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import IconGoogle from '../../assets/images/icon_google.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';
import * as Styled from './../../styles/authPages';

export const Home: React.FC = () => {
  const history = useHistory();

  const [alert, setAlert] = useState('not-connected');
  const { user, signInWithGoogle } = useAuth();
  const handleCreateRoom = async () => {
    !user && (await signInWithGoogle());
    setAlert('conected');
    setTimeout(() => {
      history.push('/rooms/new');
    }, 2100);
  };
  return (
    <Styled.Container>
      <Styled.Left as="aside">
        <strong>XXXXXXXXXXXXXXXX</strong>
        <p>XXXXXXXXXXXXXXXXXXXXXXX</p>
      </Styled.Left>
      <Styled.Right as="main">
        <Styled.Content>
          <strong className="mobile">Q&A部屋へようこそ</strong>
          <Styled.Separator>部屋を作りたい方へ</Styled.Separator>
          <Button btnG={true} btnType="fill" onClick={handleCreateRoom}>
            <img src={IconGoogle} alt="Googleアイコン" />
            ログインする
          </Button>
          <Styled.Separator>部屋に入りたい方へ</Styled.Separator>
          <form>
            <Input type="text" placeholder="コードを入力してください" />
            <Button btnType="fill" type="submit">
              入室する
            </Button>
          </form>
          <Styled.LinkRoom>
            入室する部屋を <Link to="/rooms">チェックする</Link>
          </Styled.LinkRoom>
        </Styled.Content>
      </Styled.Right>
    </Styled.Container>
  );
};
