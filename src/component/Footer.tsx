'use client';

import { Box, Container, Grid, Link as MuiLink, Typography, Divider, IconButton, Button } from '@mui/material';
import Link from 'next/link';
import { LinkedIn, GitHub, Email, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <LinkedIn />, name: 'LinkedIn', url: 'https://linkedin.com/in/ha-dirie' },
        { icon: <GitHub />, name: 'GitHub', url: 'https://github.com/ndirie' },
        { icon: <Twitter />, name: 'Twitter', url: 'https://twitter.com/_hdirie_' },
        { icon: <Instagram />, name: 'Instagram', url: 'https://instagram.com/hhhdirie' },
        { icon: <Email />, name: 'Email', url: 'mailto:xasanaxmed654@gmail.com' },
    ];

    const quickLinks = [
        { name: 'Home', path: '#home' },
        { name: 'Projects', path: '#projects' },
        { name: 'Skills', path: '#skills' },
        { name: 'Experience', path: '#experience' },
        { name: 'Contact', path: '#contact' },
    ];

    const technologyLinks = [
        { name: 'React', path: '/skills#react' },
        { name: 'Next.js', path: '/skills#nextjs' },
        { name: 'TypeScript', path: '/skills#typescript' },
        { name: 'Kotlin', path: '/skills#kotlin' },
        { name: 'MongoDB', path: '/skills#mongodb' },
    ];

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                py: 6,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* About Section */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            H-DIRIE
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Full Stack Developer specializing in web and mobile applications.
                            Passionate about creating efficient, scalable, and user-friendly solutions.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                            {socialLinks.map((social) => (
                                <IconButton
                                    key={social.name}
                                    component={Link}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    sx={{
                                        color: 'text.primary',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Quick Links
                        </Typography>
                        {quickLinks.map((link) => (
                            <MuiLink
                                key={link.name}
                                component={Button}
                                onClick={() => {
                                    const element = document.querySelector(link.path);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                color="inherit"
                                underline="hover"
                                sx={{
                                    display: 'block',
                                    mb: 1,
                                }}
                            >
                                {link.name}
                            </MuiLink>
                        ))}
                    </Grid>

                    {/* Technologies Section */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Technologies
                        </Typography>
                        {technologyLinks.map((link) => (
                            <MuiLink
                                key={link.name}
                                component={Link}
                                href={link.path}
                                color="inherit"
                                underline="hover"
                                sx={{
                                    display: 'block',
                                    mb: 1,
                                }}
                            >
                                {link.name}
                            </MuiLink>
                        ))}
                    </Grid>

                    {/* Contact Section */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Get In Touch
                        </Typography>
                        <Typography variant="body2" component="p">
                            Interested in working together or have a project in mind?
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    const element = document.querySelector('#contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                startIcon={<Email />}
                                sx={{
                                    color: 'text.primary',
                                    borderColor: 'text.primary',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                    },
                                }}
                            >
                                Contact Me
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="body2">
                        © {currentYear} H-Dirie. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;