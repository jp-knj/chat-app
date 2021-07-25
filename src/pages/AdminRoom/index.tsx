import React, { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import { useHistory, useParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import deletImg from './../../assets/images/icon_delete.svg';
import checkImg from './../../assets/images/icon_check.svg';
import answerImg from './../../assets/images/icon_answer.svg';

type RoomParams = {
  id: string;
};

export const AdminRoom = () => {
  const [signIn, setSignIn] = useState(false);
  const [notAdmin, setNotAdmin] = useState(false);
  const [questionIdModalOpen, setQuestionIdModalOpen] = useState<string | undefined>();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalTerminateRoom, setModalTerminateRoom] = useState(false);

  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { user, logoutWithGoogle } = useAuth();
  const { questions, title } = useRoom(roomId);

  const handleDeleteQuestion = async (questionId: string | undefined) => {
    setModalIsVisible(false);
    if (questionId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  };

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endeAt: new Date(),
    });
    history.push('/rooms/new');
  };

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswer: true,
    });
  };

  const handleHighlightedQuestion = async (questionId: string) => {
    const currentQuestion = questions.filter((question) => question.id === questionId);
    if (currentQuestion[0].isHighlighted) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: false,
      });
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
        isHighlighted: true,
      });
    }
  };

  const verifedAdmim = useCallback(async () => {
    const roomRef = await database.ref(`rooms/${roomId}`).get();
    if (roomRef.val()?.authorId !== user?.id) {
      setNotAdmin(true);
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [roomId, user?.id, history]);

  useEffect(() => {
    if (user !== undefined) {
      setSignIn(true);
      verifedAdmim();
    }
  }, [user, verifedAdmim]);

  useEffect(() => {
    if (signIn) {
      verifedAdmim();
    }
  }, [signIn, verifedAdmim]);

  useEffect(() => {
    if (!!questionIdModalOpen) {
      console.log(questionIdModalOpen);
      setModalIsVisible(true);
    }
  }, [questionIdModalOpen]);

  return (
    <Styled.Container>
      <Header>
        <RoomCode code={roomId} />
        <Button btnType="fill">密室</Button>
        <ToggleTheme />
      </Header>
      <Styled.Main>
        <Styled.Left>
          <Styled.Title>
            <h1>部屋: {title}</h1>
            <div>
              <span>{user?.name}</span>
              <Styled.Logout onClick={logoutWithGoogle}>ログアウト</Styled.Logout>
            </div>
          </Styled.Title>
          <Styled.Questions>
            {questions?.map((question) => {
              return (
                <Question
                  key={question?.id}
                  content={question?.content}
                  author={question?.author}
                  isAnswer={question?.isAnswer}
                  isHighlighted={question?.isHighlighted}>
                  {!question?.isAnswer && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                        <img src={checkImg} alt="質問に回答済みのマークを付ける" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlightedQuestion(question.id)}>
                        <img src={answerImg} alt="質問をクリアする" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => setQuestionIdModalOpen(question.id)}>
                    <img src={deletImg} alt="質問を削除する" />
                  </button>
                </Question>
              );
            })}
          </Styled.Questions>
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
              text="回答済み"
            />
          </Styled.Cards>
        </Styled.Right>
        <Modal
          modalVisibility={modalIsVisible}
          setVisibility={() => {
            setModalIsVisible(false);
            setQuestionIdModalOpen(undefined);
          }}
          handleConfirme={() => handleDeleteQuestion(questionIdModalOpen)}>
          質問を削除しますか？
        </Modal>

        <Modal
          modalVisibility={modalTerminateRoom}
          setVisibility={() => {
            setModalTerminateRoom(false);
          }}
          handleConfirme={() => handleEndRoom()}>
          部屋を閉めますか？
        </Modal>
      </Styled.Main>
      {notAdmin && <Toast type="error">あなたは部屋の作成者ではありません</Toast>}
    </Styled.Container>
  );
};
