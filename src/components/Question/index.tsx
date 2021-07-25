import cx from 'classnames';
import React from 'react';

import * as Styled from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: React.ReactNode;
  isAnswer?: boolean;
  isHighlighted?: boolean;
};

export const Question = ({
  content,
  author,
  children,
  isHighlighted = false,
  isAnswer = false,
}: QuestionProps) => {
  return (
    <Styled.Container
      className={cx({ answered: isAnswer }, { highlighted: isHighlighted && !isAnswer })}>
      <p>{content}</p>
      <footer>
        <Styled.User>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </Styled.User>
        <Styled.Buttons>{children}</Styled.Buttons>
      </footer>
    </Styled.Container>
  );
};
