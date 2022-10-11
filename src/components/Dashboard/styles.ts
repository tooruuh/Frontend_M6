import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;

  background: #e7e9ee;
  background: linear-gradient(90deg, #e7e9ee 60%, #a2d5ef 40%);
  margin: 2rem auto;
  padding: 3rem 2rem;
  border-radius: 0.25rem;

  display: grid;
  grid-template-columns: 1.9fr 1fr;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 470px;
  gap: 0.25rem;

  h2 {
    align-items: center;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: black;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: green;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ResultParcel = styled.div`
  width: 100%;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  gap: 1.7rem;

  font-weight: 400;
  font-size: 1.2rem;

  h2 {
    width: 100%;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid black;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }
`;
