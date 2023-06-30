import { CheckContainer } from "./Styles";

interface CheckboxPropsType {
  setUppercaseLetters: React.Dispatch<React.SetStateAction<string[]>>;
  setLowercaseLetters: React.Dispatch<React.SetStateAction<string[]>>;
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
  setSymbols: React.Dispatch<React.SetStateAction<string[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count : number;
  measureStrength: () => void;
  setStrength: React.Dispatch<React.SetStateAction<string>>;
  
}

const CheckBox = (props : CheckboxPropsType) => {
  const checkBoxNames = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];

  const upperCase: string[] = [
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
  const lowerCase: string[] = [
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
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symbols: string[] = ["!", "@", "#", "$", "%", "&"];

  let newCount:number;

  return (
    <CheckContainer>
      {checkBoxNames.map((checkItem, index) => (
        <div key={index} className="checkItems">
          <input
            type="checkbox"
            key={index}
            className="checkbox"
            id={index.toString()}
            onChange={(e) => {
              if (checkItem === "Include Uppercase Letters") {
                if (e.target.checked) {
                  props.setUppercaseLetters(upperCase);
                  newCount =  props.count+1;
                } else {
                  props.setUppercaseLetters([]);
                  newCount =  props.count-1;
                }
              } else if (checkItem === "Include Lowercase Letters") {
                if (e.target.checked) {
                  props.setLowercaseLetters(lowerCase);
                  newCount =  props.count+1;
                } else {
                  props.setLowercaseLetters([]);
                  newCount =  props.count-1;
                }
              } else if (checkItem === "Include Numbers") {
                if (e.target.checked) {
                  props.setNumbers(numbers);
                  newCount =  props.count+1;
                } else {
                  props.setNumbers([]);
                  newCount =  props.count-1;
                }
              } else if (checkItem === "Include Symbols") {
                if (e.target.checked) {
                  props.setSymbols(symbols);
                  newCount =  props.count+1;
                } else {
                  props.setSymbols([]);
                  newCount =  props.count-1;
                }
              }
              props.setCount(newCount);
              props.measureStrength();
              props.setStrength("");
              
            }}
          />
          <label htmlFor={index.toString()}>{checkItem}</label>
        </div>
        
      ))}
    </CheckContainer>
  );
};

export default CheckBox;

