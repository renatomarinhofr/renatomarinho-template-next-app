import styled from 'styled-components';

export const ContainerLayout = styled.div<{ isTablet: boolean }>`
  width: 100vw;
  margin: 0 auto;
  max-width: 1200px;
  padding: ${({ isTablet }) => (isTablet ? '12px' : '32px 120px')};
  display: flex;
  flex-direction: column;
`;