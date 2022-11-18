import styled from "styled-components";

export const PaineldeFundo = styled.div`
  background-color: #d1dce32e;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (min-width: 615px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const QuadroReq = styled.form`
  h1 {
    font-size: 24px;
    line-height: 28px;
    color: #656565;
  }
  button {
    font-size: 24px;
    line-height: 28px;
    width: 257px;
    color: #656565;
    background: none;
    border: none;
    cursor: pointer;
  }
  @media (min-width: 260px) {
    gap: 15px;
    width: 377px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    background: #ffffff;
    height: 389px;
    justify-content: space-around;
    align-items: center;
    padding: 1.5% 5% 5% 5%;
  }
`;
export const QuadroRes = styled.div`
  display: flex;
  background-color: #d1dce32e;
  flex-direction: column;
  width: 231px;
  justify-content: top;
  padding-left: 35px;
  h3 {
    margin-top: 15px;
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    padding-top: 15px;
    text-transform: uppercase;
    color: #3d75bb;
  }
  p {
    mix-blend-mode: normal;
    opacity: 0.3;
    border: 1px solid #5d9cec;
    margin-top: 4px;
    margin-bottom: 0px;
  }
  ul {
    padding-left: 0px;
  }

  @media (min-width: 260px) {
    gap: 15px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 231px;
    background: #ffffff;
    min-height: 389px;

    background-color: #d1dce32e;
  }
`;
export const QuadroValores = styled.ul`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 46px;
  color: #5d9cec;
  list-style: none;
`;

export const Content = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 390;
  max-width: 610px;
  background: #ffffff;
  border: 1px solid #d1dce3;
  border-radius: 4px;
  @media (min-width: 615px) {
    flex-direction: row;
  }
`;
