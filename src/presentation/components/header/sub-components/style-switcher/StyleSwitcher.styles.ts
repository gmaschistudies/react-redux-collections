import styled from 'styled-components';

export const StyledStyleSwitcher = styled.div`
  height: 100%;
  margin-left: 10px;
  padding: 4px;
  justify-self: self-start;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  cursor: pointer;

  .header-style-switcher {
    width: 90%;
    max-height: 60px;
    transition: 0.8s;

    &:hover {
      transform: scale(0.8);
    }
  }
`;
