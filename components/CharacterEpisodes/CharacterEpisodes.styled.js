import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  img {
    border-radius: 10px 0 0 10px;
  }
`;
export const Card = styled.div`
  display: flex;
  background: #374149;
  padding: 1.5rem;
  border-radius: 10px;
  flex-direction: column;
  ul li {
    color: #1293a9;
  }
`;
