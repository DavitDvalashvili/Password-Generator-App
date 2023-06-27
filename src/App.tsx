import { Helmet } from "react-helmet";
import GlobalStyles from "./components/GlobalStyles";
import iconCopy from "./assets/images/icon-copy.svg";
import Main from "./components/Main";
import { useState } from "react";
import { PasswordBox } from "./components/styles/Styles";
import { AppContainer } from "./components/styles/Styles";


function App() {
  let [password, setPassword] = useState("");

  const handleImageClick = () => {
    if (password) {
      navigator.clipboard.writeText(password);
    }
  };


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
      <PasswordBox>
        <input type="text" name="password" readOnly value={password} />
        <img src={iconCopy} alt="iconCopy" onClick={handleImageClick}/>
      </PasswordBox>
      <Main setPassword={setPassword}/>
    </AppContainer>
  );
}

export default App;




