import { createTheme, ThemeOptions } from "@mui/material";

// Define your theme settings for both light and dark modes
// Define your theme settings for both light and dark modes
const themeSettings = (mode: 'light' | 'dark'): ThemeOptions => ({
    palette: {
        mode,
        primary: {
            main: '#3f51b5',
            dark: '#303f9f',
            light: '#536dfe',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f50057',
            dark: '#c51162',
            light: '#ff4081',
            contrastText: '#ffffff',
        },
        error: {
            main: '#f44336',
            dark: '#d32f2f',
            light: '#ef5350',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#ff9800',
            dark: '#f57c00',
            light: '#ffb74d',
            contrastText: '#ffffff',
        },
        info: {
            main: '#2196f3',
            dark: '#1976d2',
            light: '#4fc3f7',
            contrastText: '#ffffff',
        },
        success: {
            main: '#4caf50',
            dark: '#388e3c',
            light: '#81c784',
            contrastText: '#ffffff',
        },
        ...(mode === 'light'
            ? {
                // Light mode specific overrides
                background: {
                    default: '#f8f9fa',
                    paper: '#ffffff',
                },
                text: {
                    primary: '#121212',
                    secondary: '#333333',
                },
            }
            : {
                // Dark mode specific overrides
                background: {
                    default: 'rgb(44, 39, 69)',
                    paper: 'rgb(6, 18, 46)',
                },
                text: {
                    primary: '#ffffff',
                    secondary: '#e0e0e0',
                },
            }),
    },
    typography: {
        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '8px', // Apply rounded corners to buttons
                },
            },
        },
        MuiPaper: { // Apply rounded corners to Paper components
            styleOverrides: {
                root: {
                    // borderRadius: '12px',
                },
            },
        },
        MuiCssBaseline: { // Ensure smooth transitions for theme changes
            styleOverrides: {
                body: {
                    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
                },
            },
        },
    },
});

// Create theme instances
export const lightTheme = createTheme(themeSettings('light'));
export const darkTheme = createTheme(themeSettings('dark'));

// Default export (can be used for initial SSR)
export const AppTheme = darkTheme;
