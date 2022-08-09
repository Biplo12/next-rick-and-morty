import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
  gap: 3rem;
  padding: 3rem 0;
  justify-items: center;
  background: #1d1b1c;
`;

export const Card = styled.div`
  width: 250px;
  height: 325px;
  background: white;
  h2 {
    font-size: 1rem;
  }
  a {
    color: black;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 0 1rem;
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

export const Status = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${(props) => props.bg};
  margin-right: 0.25rem;
`;
