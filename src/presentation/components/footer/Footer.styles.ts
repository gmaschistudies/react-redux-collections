import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${(props) =>
    props.theme === true ? 'darkblue' : 'lightblue'};
  display: flex;
  justify-items: center;
  align-items: center;
`;
