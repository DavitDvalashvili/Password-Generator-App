import styled from "styled-components";
import { DefaultTheme } from "../Theme/DefaultTheme";


export const AppContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 64px 0px;
  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #817d92;
  }
  .mainDiv {
    padding: 21px 16px 16px 16px;
    width: 100%;
    background-color: ${DefaultTheme.colors.darkGray};
    font-size: 16px;
    font-weight: 700;
    color: ${DefaultTheme.colors.white};
  }
`;


export const PasswordBox = styled.div`
  background-color: ${DefaultTheme.colors.darkGray};
  width: 343px;
  height: 64px;
  padding: 17px 15.5px 15px 16px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 17.5px;
    height: 20px;
  }
  input {
    border: none;
    height: 100%;
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    background-color: ${DefaultTheme.colors.darkGray};
    color: ${DefaultTheme.colors.white};
    &:focus {
        outline: none;
    }
  }
`;

export const RangeBox = styled.div`
  background-color: red;
  width: 100%;
  .range {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
  }
  .range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
    background-color: ${DefaultTheme.colors.white};
    border-radius: 50%;
  }
`;


export const StrengthBox = styled.div`
  background-color: red;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    div {
      width: 10px;
      height: 28px;
      background-color: orange;
    }
  }
`;
export const GenerateBtn = styled.button`
  background-color: yellowgreen;
  width: 100%;
  height: 56px;
`;

