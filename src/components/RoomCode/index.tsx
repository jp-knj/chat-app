import React from 'react';

import copyImg from './../../assets/images/icon_copy.svg';
import * as Styled from './styles';
// import { Toast } from '../Toast';

type RoomCodeProps = {
  code: string;
  text?: boolean;
};

export const RoomCode: React.FC<RoomCodeProps> = (props) => {
  return (
    <>
      <Styled.Button aria-label="コードをコピーする">
        <Styled.Icon>
          <img src={copyImg} alt="コードをコピーする" />
        </Styled.Icon>
        <Styled.Text>
          {props.text ? 'コードをコピーする' : `部屋 #${props.code}`}
        </Styled.Text>
      </Styled.Button>
    </>
  );
};
