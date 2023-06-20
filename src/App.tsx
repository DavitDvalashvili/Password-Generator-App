import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { DefaultTheme } from "./components/Theme/DefaultTheme";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

import iconCopy from "./assets/images/icon-copy.svg";

function App() {
  const [rangeValue, setRangeValue] = useState<number>(10);

  useEffect(() => {
    const range: any = document.querySelector(".range");
    const min = parseInt(range.min);
    const max = parseInt(range.max);
    const percentages = ((rangeValue - min) / (max - min)) * 100;
    range.style.background = `linear-gradient(to right, ${DefaultTheme.colors.green} ${percentages}%, ${DefaultTheme.colors.black} ${percentages}%)`;
  });

  const checkBoxNames: string[] = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];

  const upperCase : string[] = [ 
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerCase :string[] =  [    
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers :number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symbols :string[] = ["!", "@", "#", "$", "%", "&"];

  let [count, setCount] = useState(0); 

  const [upperCaseLetters, setUppercaseLetters] = useState<string[]>([]);
  const [lowerCaseLetters, setLowercaseLetters] = useState<string[]>([]);
  const [Numbers, setNumbers] = useState<number[]>([]);
  const [Symbols, setSymbols] = useState<string[]>([]);
  
  let allCharacters= [...upperCaseLetters, ...lowerCaseLetters, ...Numbers, ...Symbols];
  console.log(allCharacters);


  return (
    <AppContainer>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <h1>Password Generator</h1>
      <PasswordBox className="this">
        <input type="text" name="password" readOnly />
        <img src={iconCopy} alt="iconCopy" />
      </PasswordBox>

      <div className="main">
        <RangeBox>
          <div className="textbox">
            <span>Character Length</span>
            <span>{rangeValue}</span>
          </div>
          <input
            className="range"
            type="range"
            max={15}
            min={5}
            value={rangeValue}
            onChange={(e) => {
              setRangeValue(parseInt(e.target.value));
            }}
          />
        </RangeBox>
        <CheckBoxes>
          {checkBoxNames.map((checkItem, index) => (
            <div key={index}>
              <input
                type="checkbox"
                key={index}

                onChange={(e) => {
                  if(checkItem==="Include Uppercase Letters"){
                    if (e.target.checked) {
                      setUppercaseLetters(upperCase);
                      count++
                    } else {
                      setUppercaseLetters([]);
                      count--
                    }
                  } else if(checkItem==="Include Lowercase Letters"){
                    if (e.target.checked) {
                      setLowercaseLetters(lowerCase);
                      count++
                    } else {
                      setLowercaseLetters([]);
                      count--
                    }
                  } else if(checkItem==="Include Numbers"){
                    if (e.target.checked) {
                      setNumbers(numbers);
                      count++
                    } else {
                      setNumbers([]);
                      count--
                    }
                  } else if(checkItem==="Include Symbols"){
                    if (e.target.checked) {
                      setSymbols(symbols);
                      count++
                    } else {
                      setSymbols([]);
                      count--
                    }
                  }
                  setCount(count);
                }}
              />
              <span>{checkItem}</span>
            </div>
          ))}
        </CheckBoxes>
      </div>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 64px 16px;
  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: #817d92;
  }
  .main {
    padding: 16px;
    background-color: gray;
    width: 343px;
  }
`;

const PasswordBox = styled.div`
  background-color: gray;
  width: 343px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RangeBox = styled.div`
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

const CheckBoxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: orange;
`;
