import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;
export const SearchContainer = styled.div``;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  button {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;
export const PageContainer = styled.div`
  display: flex;
  color: white;
  margin-top: 1rem;
  p {
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Button = styled.button`
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  border: 1px solid #1293a9;
  padding: 0.5rem 1rem;
  transition: 0.1s ease-in-out;
  &:hover {
    background-color: #1293a9;
  }
`;

export const Input = styled.input`
  width: 400px;
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 1px solid white;
  color: white;
  padding-bottom: 5px;
`;
