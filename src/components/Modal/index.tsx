import React from 'react';
import { Button } from '../Button';
import { Container, StyledModal } from './styles';
import alertImg from './../../assets/images/icon_alert.svg';

type ModalProps = {
  modalVisibility: boolean;
  setVisibility: () => void;
  handleConfirme: () => void;
  children?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  modalVisibility,
  setVisibility,
  handleConfirme,
  children,
}) => {
  return (
    <StyledModal
      isOpen={modalVisibility}
      onEscapeKeydown={setVisibility}
      onBackgroundClick={setVisibility}>
      <Container>
        <img src={alertImg} alt="" />
        <h2>{children}</h2>
        <span></span>
        <div>
          <Button btnType="outline" onClick={setVisibility}>
            キャンセル
          </Button>
          <Button btnType="fill" onClick={handleConfirme}>
            確認する
          </Button>
        </div>
      </Container>
    </StyledModal>
  );
};
