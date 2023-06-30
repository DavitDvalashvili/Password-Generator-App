import { Helmet } from "react-helmet";
import GlobalStyles from "./components/GlobalStyles";
import Main from "./components/Main";
import { useState } from "react";
import { PasswordBox } from "./components/Styles";
import { AppContainer } from "./components/Styles";

function App() {
  let [password, setPassword] = useState("");
  let [copied, setCopied] = useState(false);

  const handleImageClick = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
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
        <div className="copyBox">
          {copied ? <span>copied</span> : ""}
          <div className="imageBox" onClick={handleImageClick}></div>
        </div>
      </PasswordBox>
      <Main setPassword={setPassword} setCopied={setCopied} />
    </AppContainer>
  );
}

export default App;
