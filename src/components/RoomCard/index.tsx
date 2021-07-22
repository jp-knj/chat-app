import React from 'react';
import * as Styled from './styles';

import { Link } from 'react-router-dom';
import { Badge } from '../../components/Badge';

type QuestionProps = {
  title?: string;
  endeAt?: string | undefined;
  code?: string;
};

export const RoomCard: React.FC<QuestionProps> = (props) => {
  return (
    <Styled.Container>
      <Link to={`/rooms/${props.code}`} className="link">
        <Styled.Title>{props.title}</Styled.Title>
      </Link>
      <footer>
        <Styled.Buttons>
          <Badge type="error">終了しました</Badge>
        </Styled.Buttons>
      </footer>
    </Styled.Container>
  );
};
