'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, List, Typography, Button, Container, Drawer, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
// import Experience from "@/component/sections/experience/Experience";
import Projects from "@/component/sections/projects/projects";
import Skills from "@/component/sections/skills/skills";
import { Home,  } from "lucide-react";
import { Page } from '@/types/navbar';
import { Close } from '@mui/icons-material';
import About from './sections/about/about';
import Services from './sections/services/services';
import Contact from './sections/contact/contact';

export const pages: Page[] = [
    { name: 'Home', path: '#home', component: <Home /> },
    { name: 'About', path: '#about', component: <About /> },
    { name: 'Projects', path: '#projects', component: <Projects /> },
    { name: 'Skills', path: '#skills', component: <Skills /> },
    // { name: 'Experience', path: '#experience', component: <Experience /> },
    { name: 'Services', path: '#services', component: <Services /> },
    { name: 'Contact', path: '#contact', component: <Contact /> },
];

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    // This would typically come from your routing or context
    const [activeSection, setActiveSection] = useState('/');

    const handleOpenMobileMenu = () => {
        setOpenMobileMenu(true);
    };

    const handleCloseMobileMenu = () => {
        setOpenMobileMenu(false);
    };

    // Intersection Observer setup
    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            let foundVisible = false;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const newPath = id === 'home' ? '/' : `#${id}`;

                    // Only update if this is the most recently intersected section
                    if (entry.intersectionRatio > 0.5) {
                        setActiveSection(newPath);
                        window.history.replaceState(null, '', newPath);
                        foundVisible = true;
                    }
                }
            });

            // If no section is sufficiently visible, check if we're at the top
            if (!foundVisible && window.scrollY < 100) {
                setActiveSection('/');
                window.history.replaceState(null, '', '/');
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: [0.1, 0.5, 0.9] // Multiple thresholds for better detection
        });

        // Observe all sections with IDs
        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });

        // Initial check for home section
        const homeSection = document.getElementById('home');
        if (homeSection && window.scrollY < 100) {
            setActiveSection('/');
        }

        return () => observer.disconnect();
    }, []);

    // Handle direct URL loads
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            setActiveSection(`#${id}`);
        } else {
            setActiveSection('/');
        }
    }, []);

    // Utility function to determine if a page is active
    const isActive = (path: string, currentSection: string) => {
        // Handle home page ('/' path)
        if (path === '/' && currentSection === '/') return true;

        // Handle hash links
        if (path.startsWith('#') && currentSection === path) return true;

        // Handle case where currentSection is '/' and we're checking a hash link
        if (path.startsWith('#') && currentSection === '/' && path === '#home') return true;

        return false;
    };

    return (
        <AppBar position="fixed"
            component="header"
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'text.primary',
                mt: 0.5,
                boxShadow: '0 4px 30px rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '16px',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Logo for desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 2 }}>
                        <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '2rem' }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            href="/"
                            sx={{
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            H-DIRIE
                        </Typography>
                    </Box>

                    {/* Mobile menu icon */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-start' }}>
                        <IconButton
                            size="large"
                            aria-label="open mobile menu"
                            aria-controls="mobile-menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenMobileMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Logo for mobile, aligned with the menu icon */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component={Link}
                                href="/"
                                sx={{
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                H-DIRIE
                            </Typography>
                        </Box>
                        {/* Contact button */}
                        {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <ThemeToggle />
                            <Button
                                variant="contained"
                                component={Link}
                                href="/contact"
                                sx={{
                                    ml: 2,
                                    textTransform: 'none',
                                    fontWeight: 'medium',
                                }}
                            >
                                Let&lsquo;s Talk
                            </Button>
                        </Box> */}
                    </Box>

                    {/* Mobile Drawer Menu */}
                    <Drawer
                        anchor="top" // You can change this to 'left', 'right', or 'bottom'
                        open={openMobileMenu}
                        onClose={handleCloseMobileMenu}
                        variant='temporary'
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                bgcolor: 'background.default', // Use your theme's background color
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                            }}
                        >
                            <IconButton onClick={handleCloseMobileMenu} color="inherit">
                                <Close />
                            </IconButton>
                        </Box>
                        <List sx={{ textAlign: 'center', width: '100%' }}>
                            {pages.map((page) => (
                                <ListItem key={page.name} disablePadding sx={{ display: 'block' }}>
                                    <ListItemButton
                                        component={Link}
                                        href={page.path}
                                        onClick={() => {
                                            handleCloseMobileMenu();
                                            setActiveSection(page.path); // Update active section on click
                                        }}
                                        sx={{
                                            textAlign: 'center',
                                            py: 2, // Increase vertical padding for better touch targets
                                            bgcolor: isActive(page.path, activeSection) ? 'action.selected' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: 'action.hover',
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography variant="h5" sx={{ textTransform: 'none', fontWeight: 'medium' }}>
                                                    {page.name}
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>

                    {/* Desktop menu items */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => {
                                    if (page.path === '/') {
                                        // Scroll to top for home
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                        setActiveSection('/');
                                    } else {
                                        // Smooth scroll to section
                                        const element = document.querySelector(page.path);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }
                                }}
                                sx={{
                                    color: 'text.primary',
                                    textTransform: 'none',
                                    fontWeight: 'medium',
                                    bgcolor: isActive(page.path, activeSection) ? 'action.selected' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                    },
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Contact button */}
                    <Box sx={{ display: 'flex' }}>
                        <ThemeToggle />
                        <Button
                            variant="contained"
                            component={Link}
                            target='_blank'
                            href="https://wa.me/+252633606331"
                            sx={{
                                ml: 2,
                                textTransform: 'none',
                                fontWeight: 'medium',
                            }}
                        >
                            Let&lsquo;s Talk
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default Navbar;