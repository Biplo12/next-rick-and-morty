import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

export const LogoContainer = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  font-size: 1.2rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  cursor: pointer;
  a {
    color: white;
    border-bottom: 2.5px solid white;
  }
  .active {
    border-bottom: 2.5px solid #1293a9;
  }
`;
