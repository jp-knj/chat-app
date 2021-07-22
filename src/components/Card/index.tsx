import React from 'react';
import * as Styled from './styles';

type CardProps = {
  btnStyle?: 'fill' | 'outline' | 'primary';
  value: number;
  text: string;
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Styled.Container btnStyle={props.btnStyle}>
      <Styled.Data>{props.value}</Styled.Data>
      <Styled.Text>{props.text}</Styled.Text>
    </Styled.Container>
  );
};
