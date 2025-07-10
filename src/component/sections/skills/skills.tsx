'use client'

import { Box, Typography, Grid, LinearProgress, useTheme, Avatar, Paper, Container, alpha, Tooltip, Theme, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Code, Cpu, Hammer, Languages, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
    {
        title: 'Frontend Development',
        description: 'Building responsive and interactive user interfaces with modern technologies.',
        icon: <Code size={24} />,
        levels: [
            { label: 'HTML', percentage: 95 },
            { label: 'CSS/SCSS', percentage: 90 },
            { label: 'JavaScript', percentage: 85 },
            { label: 'TypeScript', percentage: 80 },
            { label: 'React', percentage: 85 },
            { label: 'Next.js', percentage: 75 },
            { label: 'Tailwind CSS', percentage: 80 },
            { label: 'Material UI', percentage: 85 },
        ]
    },
    {
        title: 'Other Skills',
        description: 'Additional technologies and tools I work with.',
        icon: <Code size={24} />,
        levels: [
            { label: 'Git/GitHub', percentage: 85 },
            // { label: 'Docker', percentage: 70 },
            // { label: 'CI/CD', percentage: 65 },
            // { label: 'AWS Basics', percentage: 60 },
            { label: 'Firebase', percentage: 75 },
            // { label: 'Figma', percentage: 80 },
        ]
    },
    {
        title: 'Backend Development',
        description: 'Creating robust server-side applications and APIs with various technologies.',
        icon: <Cpu size={24} />,
        levels: [
            { label: 'Node.js', percentage: 80 },
            // { label: 'Express', percentage: 75 },
            { label: 'MongoDB', percentage: 85 },
            // { label: 'PostgreSQL', percentage: 70 },
            { label: 'Java (Spring Boot)', percentage: 75 },
            { label: 'Kotlin (Spring Boot)', percentage: 70 },
            { label: 'REST APIs', percentage: 85 },
            // { label: 'GraphQL', percentage: 65 },
        ]
    },
    {
        title: 'Mobile Development',
        description: 'Developing native and cross-platform mobile applications.',
        icon: <Smartphone size={24} />,
        levels: [
            { label: 'React Native', percentage: 65 },
            { label: 'Kotlin', percentage: 90 },
            { label: 'Java (Android)', percentage: 90 },
            { label: 'Android Studio', percentage: 90 },
            { label: 'Flutter', percentage: 40 },
            // { label: 'Expo', percentage: 70 },
        ]
    },
];

const technicalSkills = [
    {
        label: 'Frontend', description: 'HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap, Material UI (MUI), React.js',
        icon: <Code size={24} />,
    }, {
        label: 'Backend', description: 'MongoDB, Node.js (basic), Java (spring boot), Kotlin (spring boot)',
        icon: <Cpu size={24} />,
    }, {
        label: 'Mobile', description: 'Android (Java, Kotlin), React Native (Cross-platform)',
        icon: <Smartphone size={24} />,
    }, {
        label: 'Tools & Platforms', description: 'Android Studio, Visual Studio Code, Vercel, Git/GitHub, Figma (basic)',
        icon: <Hammer size={24} />,
    }, {
        label: 'Languages', description: 'English (Intermediate), Somali (Native), Arabic (Basic)',
        icon: <Languages size={24} />,
    }
]

const TechnicalSkillCard = ({ skill, theme }: { skill: typeof technicalSkills[0], theme: Theme }) => (
    <ListItem sx={{
        color: 'primary.contrastText',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            // transform: 'translateY(-5px)',
            boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.1)}`
        }
    }}>
        <Tooltip title={skill.label} arrow>
            <ListItemAvatar>
                {skill.icon}
            </ListItemAvatar>
        </Tooltip>
        <ListItemText
            sx={{ display: 'flex', flexDirection: 'column', }}
            primary={
                <Typography component="span" variant="h6" sx={{ fontWeight: 600 }}>
                    {skill.label}
                </Typography>
            }
            secondary={
                <Typography component="span" variant="body2"
                    sx={{
                        color: 'secondary.contrastText',
                        opacity: 0.8,
                        "&:hover": {
                            color: 'primary.contrastText',
                            opacity: 1
                        }
                    }}
                >{skill.description}</Typography>
            }
        />
    </ListItem>
)

const SkillCard = ({ skill, theme }: { skill: typeof skills[0]; theme: Theme }) => (
    <Paper elevation={0} sx={{
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderRadius: 3,
        boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px',
        p: 3,
        height: '100%',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: `0 10px 20px ${alpha(theme.palette.primary.main, 0.1)}`
        }
    }}>
        <Tooltip title={skill.title} arrow>
            <Avatar sx={{
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                mb: 2,
                width: 56,
                height: 56
            }}>
                {skill.icon}
            </Avatar>
        </Tooltip>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            {skill.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
            {skill.description}
        </Typography>
        <Box sx={{ mt: 3 }}>
            {skill.levels.map((level, idx) => (
                <Box key={idx} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="body2">{level.label}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {level.percentage}%
                        </Typography>
                    </Box>
                    <LinearProgress
                        variant="determinate"
                        value={level.percentage}
                        sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                                background: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
                            }
                        }}
                    />
                </Box>
            ))}
        </Box>
    </Paper>
);

export default function Skills() {
    const theme = useTheme();
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Box id="skills" component="section" sx={{
            py: 10,
            bgcolor: 'background.paper',
            color: 'text.primary',
            gap: 2
        }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mb: 6,
                        textAlign: 'center',
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: '80px',
                            height: '4px',
                            backgroundColor: theme.palette.primary.main,
                            margin: '16px auto 0',
                            borderRadius: '2px'
                        }
                    }}
                >
                    My <span style={{ color: theme.palette.primary.main }}>Skills</span>
                </Typography>

                <Grid container spacing={4}>
                    {/* About Me Card */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={itemVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <Paper elevation={6} sx={{
                                p: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                bgcolor: alpha(theme.palette.primary.main, 0.8),
                                color: 'primary.contrastText',
                                borderRadius: 4,
                                height: '100%',
                                background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                                boxShadow: `0 8px 32px 0 ${alpha(theme.palette.primary.main, 0.3)}`,
                                backdropFilter: 'blur(4px)'
                            }}>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                                    About My Skills
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    I&apos;m a full-stack developer with expertise in creating modern web and mobile applications.
                                    With 5+ years of experience, I specialize in building responsive, scalable, and
                                    user-friendly digital experiences.
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    My approach combines technical excellence with clean design principles to deliver
                                    high-quality solutions that meet both user needs and business goals.
                                </Typography>
                                <List >
                                    {
                                        technicalSkills.map((skill, index) => (
                                            <motion.div
                                                key={index}
                                            >
                                                <TechnicalSkillCard skill={skill} theme={theme} />
                                            </motion.div>
                                        ))
                                    }
                                </List>
                                <Box sx={{ mt: 'auto', pt: 2 }}>
                                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                                        Always learning new technologies and best practices
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Skills Grid */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Grid container spacing={3}>
                                    {skills.slice(0, 2).map((skill, index) => (
                                        <Grid size={{ xs: 12, sm: 12 }} key={index}>
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                variants={itemVariants}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                            >
                                                <SkillCard skill={skill} theme={theme} />
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Grid container spacing={3}>
                                    {skills.slice(2, 4).map((skill, index) => (
                                        <Grid size={{ xs: 12, sm: 12 }} key={index}>
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                variants={itemVariants}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                            >
                                                <SkillCard skill={skill} theme={theme} />
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

