'use client'

import { Typography, Grid, Box, useTheme } from '@mui/material';
import ProjectCard from './project-card';

export default function Projects() {
    const theme = useTheme();
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'Built with Next.js and MUI Built with Next.js and MUI Built with Next.js and MUI',
            technologies: ['Next.js', 'TypeScript', 'MUI'],
        },
        {
            title: 'Somali Quran Online Website',
            description: 'Built with Next.js and TAILWIND CSS Built with Next.js and TAILWIND CSS',
            technologies: ['Next.js', 'TypeScript', 'TAILWIND CSS'],
        },
        {
            title: 'Portfolio Website',
            description: 'Built with Next.js and MUI Built with Next.js and MUI Built with Next.js and MUI',
            technologies: ['Next.js', 'TypeScript', 'MUI'],
        },
        {
            title: 'Somali Quran Online Website',
            description: 'Built with Next.js and TAILWIND CSS Built with Next.js and TAILWIND CSS',
            technologies: ['Next.js', 'TypeScript', 'TAILWIND CSS'],
        },
        {
            title: 'Portfolio Website',
            description: 'Built with Next.js and MUI Built with Next.js and MUI Built with Next.js and MUI',
            technologies: ['Next.js', 'TypeScript', 'MUI'],
        },
        {
            title: 'Somali Quran Online Website',
            description: 'Built with Next.js and TAILWIND CSS Built with Next.js and TAILWIND CSS',
            technologies: ['Next.js', 'TypeScript', 'TAILWIND CSS'],
        },
    ]
    return (
        <Box id="projects" component="section" sx={{ p: 10, bgcolor: 'background.paper', color: 'text.primary' }}>
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    mb: 2,
                    position: 'relative',
                    "&::after": {
                        position: 'absolute',
                        bottom: 0,
                        top: '50%',
                        left: '13%',
                        transform: 'translateY(-50%)',
                        content: '""',
                        display: 'block',
                        width: '10%',
                        height: '1px',
                        backgroundColor: theme.palette.primary.main,
                    }
                }}
            >
                My <span style={{ color: theme.palette.primary.main }}>Projects</span>
            </Typography>
            <Typography 
                variant="body1" 
                sx={{
                    maxWidth: '700px',
                    // mx: 'auto',
                    mb: 6,
                    // fontSize: '1.1rem',
                    lineHeight: 1.7,
                }}>
                These projects demonstrates my skills in both frontend and backend development.
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project, index) => {
                    return (
                        <Grid key={index} size={{ xs: 12, md: 4 }}>
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                            />
                        </Grid>
                    )
                })}

            </Grid>
        </Box>
    );
}
