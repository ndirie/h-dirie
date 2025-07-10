'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeContextType = {
    currentTheme: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setCurrentTheme(savedTheme as 'light' | 'dark');
        } else if (systemPrefersDark) {
            setCurrentTheme('dark');
        } else {
            setCurrentTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setCurrentTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider');
    }
    return context;
};