import styled from "styled-components";
import { DefaultTheme } from "./DefaultTheme";
import iconCheck from "../assets/icon-check.svg";
import copy from "../assets/icon-copy.svg";
import copyActive from "../assets/icon-copy-active.svg";

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
  @media only screen and (min-width: 768px) {
    margin-top: 133px;
    margin-bottom: 196px;
    gap: 24px;
    h1 {
      font-size: 24px;
      margin-bottom: 7px;
    }
    .mainDiv {
      padding: 34px 32px;
      font-size: 18px;
    }
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
  .copyBox {
    display: flex;
    gap: 16px;
    color: ${DefaultTheme.colors.green};
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
  .imageBox {
    width: 17.5px;
    height: 20px;
    cursor: pointer;
    background-image: url(${copy});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.3s;
    &:hover {
      background-image: url(${copyActive});
    }
  }
  input {
    border: none;
    height: 100%;
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    background-color: ${DefaultTheme.colors.darkGray};
    color: ${DefaultTheme.colors.white};
    transition: all 0.3s;
    &:focus {
      outline: none;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 540px;
    height: 80px;
    padding: 19px 32px;
    .imageBox {
      width: 21px;
      height: 24px;
    }
    input {
      font-size: 32px;
    }
  }
`;

export const RangeBox = styled.div`
  width: 100%;
  .range {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
  }
  .textbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 21px;
    margin-bottom: 13px;
    .length {
      color: ${DefaultTheme.colors.green};
      font-size: 24px;
    }
  }
  .range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 28px;
    height: 28px;
    background-color: ${DefaultTheme.colors.white};
    border-radius: 50%;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background-color: ${DefaultTheme.colors.black};
      border: 2px solid ${DefaultTheme.colors.green};
    }
  }
  @media only screen and (min-width: 768px) {
    .textbox {
      line-height: 24px;
      margin-bottom: 25px;
      .length {
        font-size: 32px;
      }
    }
  }
`;

export const CheckContainer = styled.div`
  margin: 32px 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .checkItems {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    position: relative;
    .checkbox {
      appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid ${DefaultTheme.colors.white};
      outline: none;
      cursor: pointer;
      transition: all 0.3s;
    }

    .checkbox:active,
    .checkbox:hover {
      border: 2px solid ${DefaultTheme.colors.green};
    }

    .checkbox::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
    }

    .checkbox:checked::before {
      background-color: ${DefaultTheme.colors.green};
      background-image: url(${iconCheck});
      background-position: center;
      background-repeat: no-repeat;
      transform: translate(-1.8px, -1.8px);
    }
  }
  @media only screen and (min-width: 768px) {
    gap: 19px;
    .checkItems {
      gap: 24px;
    }
  }
`;

export const StrengthBox = styled.div`
  background-color: ${DefaultTheme.colors.black};
  padding: 14px 16px;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  .strength {
    color: ${DefaultTheme.colors.gray};
  }
  div {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 16px;
    color: ${DefaultTheme.colors.white};
  }
  .indicators {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    div {
      width: 10px;
      height: 28px;
      border: solid 2px ${DefaultTheme.colors.white};
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 23px 31.5px 21px 32px;
    height: 72px;
    div {
      font-size: 24px;
    }
  }
`;

export const GenerateBtn = styled.button`
  border: none;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  color: ${DefaultTheme.colors.darkGray};
  background-color: ${DefaultTheme.colors.green};
  width: 100%;
  height: 56px;
  font-family: "JetBrains Mono";
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: ${DefaultTheme.colors.darkGray};
    border: 2px solid ${DefaultTheme.colors.green};
    color: ${DefaultTheme.colors.green};
    svg path {
      fill: ${DefaultTheme.colors.green};
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 24px;
    height: 65px;
  }
`;
