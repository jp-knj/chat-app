import styled from 'styled-components';

import { Container as LogoContainer } from '../components/Logo/styles';
import { Container as ToggleThemeContainer } from '../components/ToggleTheme/styles';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Left = styled.div`
  flex: 7;
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;
  color: ${({ theme }) => theme.colors.white.medium};
  & > img {
    max-width: 320px;
  }

  & > strong {
    font: 700 ${({ theme }) => theme.font.sizes.xl} ${({ theme }) => theme.font.primary};
    line-height: 4.2rem;
    margin-top: 1.6rem;
  }
  & > p {
    font-size: ${({ theme }) => theme.font.sizes.lg};
    line-height: ${({ theme }) => theme.spacings.lg};
    margin-top: ${({ theme }) => theme.spacings.md};
    color: ${({ theme }) => theme.colors.white.light};
  }
  @media (max-width: 55rem) {
    display: none;
  }
`;

export const Right = styled.div`
  flex: 8;
  padding: 0 ${({ theme }) => theme.spacings.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 55rem) {
    padding-top: 8rem;
    padding-bottom: 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 320px;
  & > ${ToggleThemeContainer} {
    position: fixed;
    z-index: 1;
    right: 3rem;
    top: 3rem;
    padding: 0.5rem;
    > button {
      font-size: ${({ theme }) => theme.font.sizes.xl};
      @media (max-width: 55rem) {
        font-size: ${({ theme }) => theme.font.sizes.lg};
      }
    }
  }
  & > ${LogoContainer} {
    align-self: center;
  }
  > strong.mobile {
    display: none;
    color: ${({ theme }) => theme.colors.textColor.details};
  }
  @media (max-width: 55rem) {
    > strong.mobile {
      display: block;
      margin: ${({ theme }) => theme.spacings.xl} 0;
    }
  }
`;

export const Separator = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.sm};
  color: ${({ theme }) => theme.colors.gray.medium};
  margin: ${({ theme }) => theme.spacings.xl} 0;
  display: flex;
  align-items: center;
  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray.medium};
    margin-right: ${({ theme }) => theme.spacings.md};
  }
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray.medium};
    margin-left: ${({ theme }) => theme.spacings.md};
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: ${({ theme }) => theme.spacings.xxl} 0 ${({ theme }) => theme.spacings.lg};
  > img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.04);
  }
  > h2 {
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
    font-size: ${({ theme }) => theme.font.sizes.lg};
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) =>
      theme.isLight ? theme.colors.black : theme.colors.white.medium};
  }
`;

export const LinkRoom = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.md};
  color: ${({ theme }) =>
    theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  margin-top: ${({ theme }) => theme.spacings.md};
  > a {
    color: ${({ theme }) => theme.colors.pink.medium};
    text-decoration: none;
  }
`;
