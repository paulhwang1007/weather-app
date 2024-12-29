import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/components/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import ThemeContext from "./context/theme.context";
import { useContext } from "react";

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    // If dark is true, then dark, else light
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
