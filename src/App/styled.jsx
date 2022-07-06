import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #333;
`;

export const TimeWrapper = styled.div`
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 32px;
  padding: 16px;
`;

export const PostIt = styled.div`
  width: 250px;
  height: 200px;
  background-color: #ff9;
  border-radius: 5px;
  margin: 32px 16px 16px;
  padding: 16px;

  & > div:nth-of-type(1) {
    font-size: 18px;
    font-weight: bold;
    color: red;
  }
`;
