import { DefaultTheme } from "../components/Theme/DefaultTheme";
import CheckBox from "./CheckBox";
import { useEffect, useState } from "react";
import arrow from "../assets/images/icon-arrow-right.svg";
import { RangeBox } from "./styles/Styles";
import { GenerateBtn } from "./styles/Styles";
import { StrengthBox } from "./styles/Styles";

interface passwordType {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Main = ({ setPassword }: passwordType) => {
  //initial length of password is 10 character;
  const [passwordLength, setPasswordLength] = useState<number>(10);

  useEffect(() => {
    const range: any = document.querySelector(".range");
    const min = parseInt(range.min);
    const max = parseInt(range.max);
    const percentages = ((passwordLength - min) / (max - min)) * 100;
    range.style.background = `linear-gradient(to right, ${DefaultTheme.colors.green} 
        ${percentages}%, ${DefaultTheme.colors.black} ${percentages}%)`;
  });

  let [count, setCount] = useState<number>(0);

  const [upperCaseLetters, setUppercaseLetters] = useState<string[]>([]);
  const [lowerCaseLetters, setLowercaseLetters] = useState<string[]>([]);
  const [Numbers, setNumbers] = useState<number[]>([]);
  const [Symbols, setSymbols] = useState<string[]>([]);

  let allCharacters = [
    ...upperCaseLetters,
    ...lowerCaseLetters,
    ...Numbers,
    ...Symbols,
  ];

  const [strength, setStrength] = useState<string>("");

  function measureStrength() {
    if (passwordLength > 10 || count === 4) {
      setStrength("strong");
    } else if (count === 3) {
      setStrength("Medium");
    } else if (count === 2) {
      setStrength("week");
    } else if (count === 1) {
      setStrength("Too weak!");
    }
  }

  return (
    <div className="mainDiv">
      <RangeBox>
        <div className="textbox">
          <span>Character Length</span>
          <span>{passwordLength}</span>
        </div>
        <input
          className="range"
          type="range"
          max={15}
          min={5}
          value={passwordLength}
          onChange={(e) => {
            setPasswordLength(parseInt(e.target.value));
          }}
        />
      </RangeBox>

      <CheckBox
        setCount={setCount}
        setLowercaseLetters={setLowercaseLetters}
        setNumbers={setNumbers}
        setSymbols={setSymbols}
        setUppercaseLetters={setUppercaseLetters}
        measureStrength={measureStrength}
        setStrength={setStrength}
        count={count}
      />

      <StrengthBox>
        <span>strength</span>
        <span>{strength}</span>
        <div className="indicators">
          <div className="check"></div>
          <div className="check"></div>
          <div className="check"></div>
          <div className="check"></div>
        </div>
      </StrengthBox>

      <GenerateBtn
        onClick={() => {
          if (count) {
            let ranElements: string = "";
            for (let i = 0; i < passwordLength; i++) {
              var ranElement =
                allCharacters[Math.floor(Math.random() * allCharacters.length)];
              ranElements += ranElement;
            }
            setPassword(ranElements);
            measureStrength();
          }
        }}
      >
        <span>GENERATE</span>
        <img src={arrow} alt="arrow" />
      </GenerateBtn>
    </div>
  );
};

export default Main;



