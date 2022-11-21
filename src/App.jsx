import Navbar from "./components/Navbar";
import DestinationCard from "./components/DestinationCard";
import data from "./data";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const posts = data.map((item) => {
    return <DestinationCard key={item.id} item={item} />;
  });

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="container" id={theme}>
        <Navbar />
        <section className="posts">{posts}</section>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
