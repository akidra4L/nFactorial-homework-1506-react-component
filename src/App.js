import { useState  } from "react";
import { DefaultContext } from "./Context";

//импортируем стили
import "./App.css";

import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState("light");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  }

  const handleSetTheme = (theme) => {
    console.log(theme);
    if(theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <DefaultContext.Provider value={{ handleSetTheme, handleCreateFan }}>
      <Header fan={fan} handleSetTheme={ handleSetTheme } theme={theme} />
      <hr />
      <Content handleCreateFan={ handleCreateFan } theme={theme} />
      <hr />
      <Footer />
    </DefaultContext.Provider>
  );
}