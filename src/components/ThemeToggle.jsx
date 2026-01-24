import { Moon, Sun } from "lucide-react"; 
// Added useEffect import , gemini
import { useState, useEffect } from "react"; 

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // remember theme preference on load
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    // Function to toggle theme
    const toggleTheme = () => {
        if (isDarkMode) {
            // do some stuff
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            // do some other stuff
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                <Moon className="h-6 w-6 text-blue-900" />
                )}
        </button>
    );
};