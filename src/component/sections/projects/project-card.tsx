'use client'

import { Box, Typography, Chip, useTheme } from "@mui/material";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const ProjectCard = ({
    title,
    description,
    technologies
}: {
    title: string;
    description: string;
    technologies: string[];
}) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                p: 4,
                borderRadius: 2,
                bgcolor: theme.palette.background.paper,
                boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 20px -9px',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 20px -9px',
                },
            }}
        >
            <FolderOpenIcon color="primary" fontSize="large"/>
            {/* Title with Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6" fontWeight={500} color="primary">
                    {title}
                </Typography>
            </Box>

            {/* Description */}
            <Typography variant="body2" fontWeight={300} color="text.secondary">
                {description}
            </Typography>

            {/* Technologies */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {technologies.map((tech) => (
                    <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                            backgroundColor: theme.palette.primary.light,
                            fontWeight: 500,
                            color: theme.palette.primary.contrastText,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ProjectCard;
