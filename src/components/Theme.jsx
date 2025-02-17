import { useState } from "react";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`p-4 min-h-screen ${darkMode ? "bg-gray-900 text-white": "bg-white text-black"}`}>
            <h2 className="text-2xl">Theme: {darkMode ? "Dark Mode" : "Light Mode"}</h2>
            <button 
                className="mt-4 px-2 py-2 rounded-lg bg-blue-500 text-whhite"
                onClick={() => setDarkMode(!darkMode)}
            >
                Toggle Theme
            </button>
        </div>
    )
}

export default ThemeToggle;