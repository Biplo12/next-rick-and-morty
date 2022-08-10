import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
  gap: 3rem;
  padding: 3rem 0;
  justify-items: center;
  img {
    border-radius: 10px 10px 0 0;
  }
`;

export const Card = styled.div`
  width: 250px;
  min-height: 325px;
  height: auto;
  background: #374149;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  h2 {
    font-size: 1rem;
  }
  a {
    color: black;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 0 0.5rem 1rem 0.5rem;
  p {
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardBottom = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  p {
    padding: 0.25rem 0;
    font-size: 0.75rem;
    span {
      font-weight: 700;
    }
  }
`;

export const Status = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${(props) => props.bg};
  margin-right: 0.25rem;
`;
export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;
