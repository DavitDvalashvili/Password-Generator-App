import { DefaultTheme } from "./DefaultTheme";
import CheckBox from "./CheckBox";
import { useEffect, useState } from "react";
import { RangeBox } from "./Styles";
import { GenerateBtn } from "./Styles";
import { StrengthBox } from "./Styles";

interface propsType {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = (props: propsType) => {
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
  const strengthLevels: string[] = ["Too Weak!", "Week!", "Medium!", "Strong!"];

  function measureStrength() {
    if (count === 4) {
      setStrength(strengthLevels[3]);
    } else if (count === 3) {
      setStrength(strengthLevels[2]);
    } else if (count === 2) {
      setStrength(strengthLevels[1]);
    } else if (count === 1) {
      setStrength(strengthLevels[0]);
    }
  }

  function colorChanger(boxNumber: number) {
    if (count == 1 && boxNumber == 1) {
      return { backgroundColor: "#F64A4A", borderWidth: 0 };
    } else if (count == 2 && boxNumber <= 2) {
      return { backgroundColor: "#FB7C58", borderWidth: 0 };
    } else if (count == 3 && boxNumber <= 3) {
      return { backgroundColor: "#F8CD65", borderWidth: 0 };
    } else if (count == 4 && boxNumber <= 4) {
      return { backgroundColor: "#A4FFAF", borderWidth: 0 };
    }
  }

  function handleClick() {
    if (count) {
      let ranElements: string = "";
      for (let i = 0; i < passwordLength; i++) {
        var ranElement =
          allCharacters[Math.floor(Math.random() * allCharacters.length)];
        ranElements += ranElement;
      }
      props.setPassword(ranElements);
      props.setCopied(false);
      measureStrength();
    }
  }

  return (
    <div className="mainDiv">
      <RangeBox>
        <div className="textbox">
          <span>Character Length</span>
          <span className="length">{passwordLength}</span>
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
        <span className="strength">strength</span>
        <div>
          <span className="strengthLevel">{strength}</span>
          <div className="indicators">
            {strengthLevels.map((level, boxNumber) => (
              <div
                key={boxNumber}
                style={colorChanger(boxNumber + 1)}
                id={level}
              ></div>
            ))}
          </div>
        </div>
      </StrengthBox>

      <GenerateBtn
        onClick={() => {
          handleClick();
        }}
      >
        <span>GENERATE</span>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </GenerateBtn>
    </div>
  );
};

export default Main;
