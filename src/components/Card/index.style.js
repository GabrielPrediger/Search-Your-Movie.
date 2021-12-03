import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: 10%;
  max-width: 20%;
  height: 655px;
  margin: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 1px 8px 7px 1px #000000;
  background: #fff;
  `;

export const Img = styled.img`
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  max-height: 400px;
`;

export const Div = styled.div`
  display: flex;
  width: 100%;

  height: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  font-family: "Calibri Light", sans-serif;
  font-weight: bold;

`;

export const Type = styled.h1`
  font-size: 20px;
  font-weight: bold;
  background: rgba(110, 221, 31, 0.2);
  color: rgb(110, 221, 31);
  padding: 10px;
  border: 1px solid rgb(110, 221, 31);
  border-radius: 20px;
`;
