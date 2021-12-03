import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: orange;
  font-family: "Poppins", sans-serif;
`;

export const Title = styled.h1`
  color: white;
  font-size: 80px;
`;

export const Input = styled.input`
  border-radius: 15px;
  padding: 10px;
  width: 30%;
  font-size: 32px;
  margin-bottom: 20px;
  border: 0;

  :focus {
    outline-width: 0;
  }
`;

export const Lista = styled.ol`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.7);
`;

export const NotFound = styled.h1`
  width: 18%;
  display: flex;
  justify-content: center;

  margin: 10px auto;
  padding: 10px;

  border: 1px solid red;
  border-radius: 20px;

  font-family: "Calibri Light", sans-serif;
  font-size: 15px;
  background: rgba(255 149 149 / 70%);
  color: red;

`;

export const Found = styled.h1`
  width: 18%;
  display: flex;
  justify-content: center;

  margin: 10px auto;
  padding: 10px;

  border: 1px solid #00e91c;
  border-radius: 20px;

  font-family: "Calibri Light", sans-serif;
  font-size: 15px;
  background: rgba(204 253 201 / 70%);
  color: #00e91c;

`;

