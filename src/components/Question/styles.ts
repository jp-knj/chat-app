import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.bg.input};
  border: 0;
  border-radius: 0 ${({ theme }) => theme.borderRadius.md}
    ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 0.1rem 0.4rem
    ${({ theme }) => (theme.isLight ? 'rgba(0,0,0,20%)' : 'rgba(24,24,24,20%)')};
  padding: 2.4rem;
  & + & {
    margin-top: 0.8rem;
  }
  &.highlighted {
    background: ${({ theme }) =>
      theme.isLight ? theme.colors.purple.white : '#835afd45'};
    border: 1px solid ${({ theme }) => theme.colors.purple.light};
    span {
      color: ${({ theme }) => theme.colors.textColor.primary};
    }
  }
  &.answered {
    background: ${({ theme }) => (theme.isLight ? '#f6f6f6' : '#2d2d2d63')};
  }

  p {
    color: ${({ theme }) => theme.colors.textColor.primary};
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.spacings.lg};
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xsm};
  > img {
    width: ${({ theme }) => theme.spacings.xl};
    height: ${({ theme }) => theme.spacings.xl};
    border-radius: 50%;
  }
  > span {
    font-size: ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.textColor.details};
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.md};
  > button {
    border: 0;
    background: transparent;
    cursor: pointer;
    &.btnLike {
      display: flex;
      align-items: flex-end;
      color: ${({ theme }) => theme.colors.textColor.details};
      gap: 0.8rem;
      transition: all 0.2s;
      > svg path {
        stroke: ${({ theme }) => theme.colors.textColor.details};
      }
      &.liked {
        color: ${({ theme }) => theme.colors.purple.light};
        > svg path {
          stroke: ${({ theme }) => theme.colors.purple.light};
        }
      }
      &:disabled {
        cursor: not-allowed;
      }
    }
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
