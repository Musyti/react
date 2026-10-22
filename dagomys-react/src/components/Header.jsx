import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";


function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={`header theme-${theme}`}>
      <h1>Социальная сеть Крутые пацанчики</h1>
      <p>Заходите все сюда тут клево классно</p>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/profile">Профиль</Link>
        <Link to="/settings">Настройки</Link>
        <Link to="/about">О проекте</Link>
        <button className="toggle" onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "🌞"}
                </button>
      </nav>
    </header>
  );
}

export default Header;