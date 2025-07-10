'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { lightTheme, darkTheme } from '@/theme/theme';
import { useThemeContext, ThemeContextProvider } from '@/context/ThemeContext';

const ThemeProviderInner = ({ children }: { children: ReactNode }) => {
    const { currentTheme } = useThemeContext();
    const theme = currentTheme === 'light' ? lightTheme : darkTheme;

    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    );
};

export const ThemeRegistry = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeContextProvider>
            <ThemeProviderInner>
                {children}
            </ThemeProviderInner>
        </ThemeContextProvider>
    );
};