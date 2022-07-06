import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  color: #ddd;
  margin: 16px 16px 24px;
  font-size: 18px;

  & > div:nth-of-type(1) {
    margin-right: 8px;
  }

  & > div:nth-of-type(2) {
    margin-right: auto;
  }

  & > div:nth-of-type(3) {
    margin-right: 32px;

    & > a:nth-of-type(1) {
      margin-right: 8px;
      color: #9f9;
      border: 1px solid #9f9;
    }

    & > a:nth-of-type(2) {
      color: #f99;
      border: 1px solid #f99;
    }

    & > a {
      text-decoration: none;
      padding: 4px;
      border-radius: 5px;
    }
  }
`;
