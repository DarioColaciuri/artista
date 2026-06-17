import { useTheme } from "../../context/ThemeContext";

export default function ThemeBackground() {
  const { isLight } = useTheme();

  return (
    <div className={`theme-bg-overlay ${isLight ? "visible" : ""}`} />
  );
}
