import styled from 'styled-components';
import SRModal from 'styled-react-modal';

export const StyledModal = SRModal.styled``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.bg.input};
  opacity: 1;
  color: white;
  border-radius: 0 ${({ theme }) => theme.borderRadius.md}
    ${({ theme }) => theme.borderRadius.md};
  gap: ${({ theme }) => theme.spacings.md};
  color: ${({ theme }) => theme.colors.textColor.primary};
  > span {
    font-size: ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.textColor.details};
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
  }
`;
