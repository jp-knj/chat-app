import styled from 'styled-components';

import { Button as ButtonContainer } from '../../components/Button/styles';
import { Button as ToggleThemeContainer } from '../../components/ToggleTheme/styles';

export const Header = styled.div`
  padding: ${({ theme }) => theme.spacings.lg};
  border-bottom: 1px solid
    ${({ theme }) => (theme.isLight ? theme.colors.gray.light : theme.colors.black)};
  > div {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 130rem) {
      max-width: 160rem;
    }
    @media (min-width: 180rem) {
      max-width: 200rem;
    }
  }
`;

export const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 70rem) {
    gap: 1rem;
  }
  ${ToggleThemeContainer} {
    font-size: 3rem;
  }
  ${ButtonContainer} {
    margin: 0;
    height: 4rem;
    width: 20rem;

    @media (max-width: 70rem) {
      padding-left: 0;
      padding-right: 0;
      width: 15rem;
    }
  }
`;
