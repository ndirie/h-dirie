'use client'

import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
    const floatingSkills = [
        { label: 'Development', bgColor: '#1976d2', top: 25, left: -25 },
        { label: 'Mobile', bgColor: '#9c27b0', bottom: 20, left: -30 },
        { label: 'Design', bgColor: '#2e7d32', bottom: 100, right: -25 },
    ]
    return (
        <Box
            id="home"
            component="section"
            sx={{
                py: 10,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: 6,
                bgcolor: 'background.paper',
                color: 'text.primary',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    opacity: 0.1,
                    zIndex: 0
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    zIndex: 1,
                    maxWidth: { xs: '100%', md: '50%' },
                    px: { xs: 3, md: 0 },
                    textAlign: { xs: 'center', md: 'left' }
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: 2
                    }}
                >
                    Hi, I&lsquo;m <Typography component="span" color="primary.main">H-Dirie</Typography>
                </Typography>

                <Typography
                    variant="h4"
                    color="text.secondary"
                    gutterBottom
                    sx={{
                        mb: 3,
                        textDecoration: 'underline',
                        textDecorationSkip: '1px',
                        textDecorationColor: 'primary.main',
                        textDecorationThickness: 2,
                        textDecorationStyle: 'dotted',
                        
                    }}
                >
                    <Typewriter
                        options={{
                            strings: ['Full Stack Web Developer', 'Responsive & Clean Web', 'Web Specialist', 'Mobile Developer'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                            cursor: '|'
                        }}
                    />
                </Typography>

                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        maxWidth: '600px',
                        mb: 4,
                        fontSize: '1.1rem',
                        lineHeight: 1.7
                    }}
                >
                    I specialize in building responsive, performant web and mobile applications
                    using modern technologies like React, Next.js, Kotlin, and MongoDB.
                </Typography>

                {/* Tech stack chips */}
                <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
                    {['React', 'Next.js', 'TypeScript', 'Kotlin', 'MongoDB', 'MUI'].map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            color="primary"
                            variant="outlined"
                            size="small"
                        />
                    ))}
                </Stack>

                <Box sx={{ display: 'flex', gap: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Button
                        component={Link}
                        href="#projects"
                        variant="contained"
                        size="large"
                        sx={{
                            px: 4,
                            py: 1.5
                        }}
                    >
                        View My Work
                    </Button>
                    <Button
                        component={Link}
                        href="#contact"
                        variant="outlined"
                        size="large"
                        sx={{
                            px: 4,
                            py: 1.5
                        }}
                    >
                        Contact Me
                    </Button>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 3,
                    mt: 4,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    ".social-media-icon": {
                        transition: 'all 0.3s ease-in-out',
                        borderRadius: '50%',
                        "&:hover": {
                            color: 'white',
                            transform: 'scale(1.1)',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                        }
                    }
                }}>
                    <SocialIcon className='social-media-icon' url='https://www.instagram.com/h_dirie/' style={{
                        width: 40,
                        height: 40,
                    }} target='_blank' />
                    <SocialIcon className='social-media-icon' url='https://github.com/h-dirie'
                        style={{
                            width: 40,
                            height: 40,
                        }} target='_blank' />
                    <SocialIcon className='social-media-icon' url='https://www.linkedin.com/in/h-dirie/'
                        style={{
                            width: 40,
                            height: 40,
                        }} target='_blank' />
                    <SocialIcon className='social-media-icon' url='https://twitter.com/h_dirie'
                        style={{
                            width: 40,
                            height: 40,
                        }} target='_blank' />
                </Box>
            </Box>

            {/* Profile image */}
            <Box
                sx={{
                    position: 'relative',
                    width: { xs: 300, md: 400 },
                    height: { xs: 300, md: 400 },
                    // mx: 'auto',
                    mt: 4,
                }}
            >
                {/* Profile Image Container */}
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '12%',
                        // overflow: 'hidden',
                        boxShadow: 2,
                        position: 'relative',
                        display: 'block', // ✅ Add this line to enable ::before
                        zIndex: 1, // ensure the ::before is behind image, image zIndex must be higher
                        "&::before": {
                            content: '""',
                            position: 'absolute',
                            bottom: -20,
                            right: -20,
                            height: '100%',
                            width: '100%',
                            borderRadius: 8,
                            bgcolor: 'primary.dark',
                            opacity: 0.7,
                            zIndex: -1, // push behind image
                        }
                    }}
                >
                    <Image
                        src="/profile.jpg"
                        alt="H-Dirie Profile"
                        width={400}
                        height={400}
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            borderRadius: '12%',
                            position: 'relative',
                            zIndex: 1, // ensure it's above the ::before
                        }}
                        priority
                    />
                </Box>


                {/* Floating Labels - OUTSIDE image box so they're not clipped */}
                {
                    floatingSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                top: skill.top || undefined,
                                left: skill.left || undefined,
                                right: skill.right || undefined,
                                bottom: skill.bottom || undefined,
                                backgroundColor: skill.bgColor, // primary.main fallback
                                color: 'white',
                                padding: '12px 16px',
                                zIndex: 2,
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                            }}
                        >{skill.label}</motion.div>
                    ))
                }
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 1
                }}
            >
                <Typography variant="caption" sx={{ mb: 1 }}>
                    Scroll Down
                </Typography>

                {/* Outer shell */}
                <Box
                    sx={{
                        width: 24,
                        height: 40,
                        border: '2px solid',
                        borderColor: 'text.secondary',
                        borderRadius: 12,
                        position: 'relative',
                    }}
                >
                    {/* Animated dot inside using framer-motion */}
                    <motion.div
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: 10, opacity: 0 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        style={{
                            position: 'absolute',
                            top: 8,
                            left: '40%',
                            width: 4,
                            height: 8,
                            backgroundColor: 'currentColor',
                            borderRadius: 2,
                            transform: 'translateX(-50%)',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}