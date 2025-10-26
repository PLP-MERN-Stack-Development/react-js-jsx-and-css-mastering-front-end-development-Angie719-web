// src/components/theme/ThemeSwitcher.jsx
import { useTheme } from '../context/ThemeContext';
import Button from '../ui/Button';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button 
      variant="secondary" 
      onClick={toggleTheme}
      className="ml-4 p-2 text-xl"
      aria-label="Toggle theme"
    >
      {isDarkMode ? '🌞' : '🌙'}
    </Button>
  );
};

export default ThemeSwitcher;