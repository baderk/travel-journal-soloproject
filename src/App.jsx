import Navbar from "./components/Navbar";
import DestinationCard from "./components/DestinationCard";
import data from "./data";
import { createContext, useState } from "react";

//export const ThemeContext = createContext(null);

function App() {
  const posts = data.map((item) => {
    return <DestinationCard key={item.id} item={item} />;
  });

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  //<ThemeContext.Provider value={{ theme, toggleTheme }}>
  //</ThemeContext.Provider>
  return (
    <div className="container" id={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <section className="posts">{posts}</section>
    </div>
  );
}

export default App;
