import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Icon } from "@iconify/react";


export default function ThemeToggle({ className = "" }) {
const { theme, toggleTheme } = useTheme();
const isDark = theme === "dark";


return (
<button
aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
className={`btn btn-ghost btn-circle ${className}`}
onClick={toggleTheme}
type="button"
>
{isDark ? (
<Icon icon="mdi:weather-sunny" width="22" height="22" />
) : (
<Icon icon="mdi:weather-night" width="22" height="22" />
)}
</button>
);
}