import styled from 'styled-components';
export const AppContainer = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #010101;
  background-color: ${props => props.theme.colors.blueBackgroundColor};
  width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: ${props => props.theme.spacing.large};
`;
