import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold">ReactWeek3</h1>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 px-2 py-1 rounded"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

