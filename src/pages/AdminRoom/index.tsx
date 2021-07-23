import React from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { Card } from '../../components/Card';
import { Question } from '../../components/Question';

export const AdminRoom = () => {
  return (
    <Header>
      <RoomCode code={roomId} />
      <Button btnType="fill">密室にする</Button>
      <ToggleTheme />
    </Header>
  );
};
