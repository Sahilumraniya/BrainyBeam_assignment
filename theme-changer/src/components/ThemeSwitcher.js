// src/ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className='btn'>
            Switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    );
};

export default ThemeSwitcher;
