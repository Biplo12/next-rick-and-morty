import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    border-radius: 10px 0 0 10px;
  }
`;
export const Card = styled.div`
  display: flex;
  background: #374149;
  padding: 0 1.5rem 0 0;
  border-radius: 10px;
`;
export const CharacterStatus = styled.div`
  display: flex;
  align-items: center;
`;
export const CharacterInfo = styled.div`
  margin-left: 2rem;
  span {
    color: #1293a9;
  }
`;
export const Status = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${(props) => props.bg};
  margin-right: 0.25rem;
  display: flex;
  align-items: center;
`;
