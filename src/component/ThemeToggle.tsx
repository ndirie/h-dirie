'use client';

import { IconButton, Tooltip, useTheme } from '@mui/material';
import { useThemeContext } from '@/context/ThemeContext';
import { Sun, SunMoon } from 'lucide-react';

const ThemeToggle = () => {
    const { toggleTheme, currentTheme } = useThemeContext();
    const theme = useTheme();

    return (
        <Tooltip title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}>
            <IconButton
                onClick={toggleTheme}
                color="inherit"
                aria-label="toggle theme"
                sx={{
                    color: theme.palette.text.primary,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                    },
                }}
            >
                {currentTheme === 'dark' ? <Sun /> : <SunMoon />}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeToggle;