import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 105vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: -3rem;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
`;