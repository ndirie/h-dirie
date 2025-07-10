'use client';
import { Lightbulb, School } from "@mui/icons-material";
import { Box, Typography, useTheme, useMediaQuery, Button, Grid, alpha, Avatar, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Cpu, Smartphone } from "lucide-react";
import Image from "next/image";

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            id="about"
            component="section"
            sx={{
                py: 10,
                px: isMobile ? 4 : 10,
                backgroundColor: alpha(theme.palette.background.paper, 0.1),
                boxShadow: theme.shadows[1],
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -50,
                    right: -50,
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.light,
                    opacity: 0.1,
                    zIndex: 0
                }}
            />

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
                        top: { xs: undefined, lg: '50%' },
                        left: { xs: undefined, lg: '11%' },
                        transform: 'translateY(-50%)',
                        content: '""',
                        display: 'block',
                        width: {xs: '20%', lg: '10%'},
                        height: '1px',
                        backgroundColor: theme.palette.primary.dark,
                    }
                }}
            >
                About <span style={{ color: theme.palette.primary.main }}>Me</span>
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    gap: 6,
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Grid container spacing={4} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                    <Grid size={{ xs: 12, md: 4 }}>

                        {/* Profile image with modern border effect */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            style={{
                                flex: 1,
                                position: 'relative'
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: 400,
                                    aspectRatio: '1/1',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    boxShadow: 6,
                                    position: 'relative',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        inset: -10,
                                        borderRadius: '50%',
                                        border: `2px solid ${theme.palette.primary.main}`,
                                        zIndex: -1,
                                        opacity: 0.7
                                    }
                                }}
                            >
                                <Image
                                    src="/profile.jpg" // Replace with your image
                                    alt="H-Dirie Profile"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                        filter: 'grayscale(20%) contrast(110%)'
                                    }}
                                    quality={100}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        {/* About content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                gap: 24
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 2
                                }}
                            >
                                Hi, I am H Dirie, a Creative Developer
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    color: theme.palette.text.secondary,
                                    mb: 3
                                }}
                            >
                                I&apos;m a passionate developer/designer with expertise in creating modern
                                web applications and digital experiences. With 5+ years of experience,
                                I specialize in bridging the gap between design and technology.
                                <br />
                                <br />
                                I enjoy building user-friendly interfaces, solving bugs, and delivering well-structured code that meets client needs.
                                I always focus on clear communication, reliability, and timely delivery.
                            </Typography>
                            <Grid container spacing={4}>
                                {/* Skills Section */}
                                {[
                                    {
                                        title: 'Frontend',
                                        icon: <Code />,
                                        description: 'HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap, MUI',
                                        color: theme.palette.primary.main
                                    },
                                    {
                                        title: 'Backend',
                                        icon: <Cpu />,
                                        description: 'MongoDB, Node.js, Java (Spring Boot), Kotlin (Spring Boot)',
                                        color: theme.palette.secondary.main
                                    },
                                    {
                                        title: 'Mobile',
                                        icon: <Smartphone />,
                                        description: 'Kotlin, Java, Android Studio, React Native',
                                        color: theme.palette.success.main
                                    },
                                ].map((skill, index) => (
                                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Paper elevation={0} sx={{
                                                p: 4,
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                borderRadius: 3,
                                                transition: 'all 0.3s ease',
                                                background: `linear-gradient(135deg, ${alpha(skill.color, 0.1)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: `0 10px 25px ${alpha(skill.color, 0.2)}`
                                                }
                                            }}>
                                                <Avatar sx={{
                                                    bgcolor: alpha(skill.color, 0.2),
                                                    color: skill.color,
                                                    width: 60,
                                                    height: 60,
                                                    mb: 3
                                                }}>
                                                    {skill.icon}
                                                </Avatar>
                                                <Typography variant="h6" sx={{
                                                    fontWeight: 600,
                                                    mb: 2,
                                                    color: theme.palette.text.primary
                                                }}>
                                                    {skill.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{
                                                    color: theme.palette.text.secondary,
                                                    mb: 2
                                                }}>
                                                    {skill.description}
                                                </Typography>
                                            </Paper>
                                        </motion.div>
                                    </Grid>
                                ))}

                                {/* Education Section */}
                                <Grid size={12}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <Paper elevation={0} sx={{
                                            p: 4,
                                            borderRadius: 3,
                                            background: alpha(theme.palette.background.default, 0.5),
                                            backdropFilter: 'blur(10px)',
                                            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 3
                                            }}>
                                                <School sx={{
                                                    fontSize: 40,
                                                    color: theme.palette.primary.main,
                                                    mr: 2
                                                }} />
                                                <Typography variant="h4" sx={{
                                                    fontWeight: 700,
                                                    color: theme.palette.text.primary
                                                }}>
                                                    My Education
                                                </Typography>
                                            </Box>

                                            <Typography variant="h6" sx={{
                                                fontSize: '1.5rem',
                                                lineHeight: 1.6,
                                                color: theme.palette.text.primary,
                                                mb: 2,
                                                fontWeight: 500
                                            }}>
                                                Self-Taught Developer
                                            </Typography>

                                            <Typography variant="body1" sx={{
                                                fontSize: '1.1rem',
                                                lineHeight: 1.8,
                                                color: theme.palette.text.secondary,
                                                mb: 3
                                            }}>
                                                Through online courses, documentation, and hands-on projects, I&apos;ve built a comprehensive skill set that rivals formal education.
                                            </Typography>

                                            <Box sx={{
                                                p: 2,
                                                pl: 3,
                                                borderLeft: `3px solid ${theme.palette.primary.main}`,
                                                background: alpha(theme.palette.primary.main, 0.05),
                                                mb: 3
                                            }}>
                                                <Typography variant="body1" sx={{
                                                    fontStyle: 'italic',
                                                    color: theme.palette.text.primary
                                                }}>
                                                    &quot;I don&apos;t have a traditional degree — instead I focused on building real projects that solve actual problems.&quot;
                                                </Typography>
                                            </Box>

                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mt: 2
                                            }}>
                                                <Lightbulb sx={{
                                                    color: theme.palette.warning.main,
                                                    mr: 1
                                                }} />
                                                <Typography variant="caption" sx={{
                                                    fontSize: '0.9rem',
                                                    color: theme.palette.text.secondary
                                                }}>
                                                    Continuous learner with certifications from Udemy, Coursera, and freeCodeCamp
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: 2, mt: 2 }}>
                                <motion.div whileHover={{ y: -3 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ px: 4, py: 1.5 }}
                                        onClick={() => {
                                            const element = document.getElementById('projects');
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        View my Work
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ y: -3 }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        sx={{ px: 4, py: 1.5 }}
                                        onClick={() => {
                                            const element = document.getElementById('contact');
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        Contact Me
                                    </Button>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;