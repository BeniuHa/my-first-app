import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Link from "./components/Link";

const thePassword = "rosół";

function App() {
  const [password, setPassword] = useState("");

  const changeHandler = (event) => {
    setPassword(event.target.value);
  };

  let passwordCorrect = false;

  if (password.length > 0 && password == thePassword) {
    passwordCorrect = true;
  }

  return (
    <>
      <div className="flex-row">
        <h1 className="text-3xl font-bold underline">Hello, Benio!</h1>
        <p>Enter password for access to this website</p>
        <input
          className="border"
          type="password"
          onChange={changeHandler}
        ></input>
      </div>
      {passwordCorrect && (
        <div className="flex-row text-5xl font-bold text-blue-900 ">
          <Link href="https://www.roblox.com/home" title="Roblox Home" />
          <Link
            href="https://www.roblox.com/discover#/"
            title="Roblox Games aka Discover"
          />
          <Link
            href="https://www.kwestiasmaku.com/kuchnia_polska/rosol/przepis.html"
            title="rosół"
          />
        </div>
      )}
    </>
  );
}

export default App;
