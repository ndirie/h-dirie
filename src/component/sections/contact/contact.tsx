"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'; // Import useState for form handling
import { Box, IconButton, Typography, TextField, Button, Grid, Paper, Stack, ListItem, ListItemIcon, ListItemText, List, useTheme, Alert } from '@mui/material';
import { LinkedIn, GitHub, Email, Twitter, LocationOn, EventAvailable } from '@mui/icons-material'; // Added Phone and LocationOn icons
import { PhoneCall } from 'lucide-react';
import { useSendMessage } from './hooks/send-message-hook';

export default function Contact() {
    const theme = useTheme();

    const { sendMessage, emailResponse, loading } = useSendMessage();

    // State to manage form inputs (optional, but good practice for controlled components)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [message, setMessage] = useState<string | null>(null)

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        sendMessage({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            body: formData.message
        })
        if (emailResponse) {
            switch (emailResponse.status) {
                case 'PENDING': setMessage('Sending...');
                    break;
                case 'SENT': setMessage('Message sent successfully!');
                    break;
                case 'FAILED': setMessage('Message failed to send.');
                    break;
                default: setMessage('An error occurred while sending the message.');
                    break;
            }
        }
        // Optionally reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <Box
            id="contact"
            component="section"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                py: { xs: 8, md: 12 }, // More vertical padding for better spacing
                px: { xs: 2, sm: 4, md: 8 }, // Horizontal padding
                color: 'text.primary',
                bgcolor: 'background.default', // Use theme background color
                textAlign: 'center', // Center align overall content
            }}
        >
            {/* decoration */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -100,
                    left: -100,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    opacity: 0.1,
                    zIndex: 1
                }} />
            <Typography
                variant="h5"
                component="h2"
                sx={{
                    justifyContent: 'start',
                    textAlign: 'start',
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    mb: 2,
                    position: 'relative',
                    "&::after": {
                        position: 'absolute',
                        bottom: 0,
                        top: '50%',
                        left: '12%',
                        transform: 'translateY(-50%)',
                        content: '""',
                        display: 'block',
                        width: '10%',
                        height: '1px',
                        backgroundColor: theme.palette.primary.main,
                    }
                }}>
                Contact <span style={{ color: theme.palette.primary.main }}>Me</span>
            </Typography>
            <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
                Let&apos;s Connect!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
                Have a project in mind, a question, or just want to say hello? Feel free to reach out using the form below or connect with me on social media. I&apos;m always open to new opportunities and collaborations.
            </Typography>

            <Grid container spacing={5} justifyContent="center" alignItems="stretch"> {/* Added alignItems: 'stretch' */}

                {/* Social Media & Direct Contact Section */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <Paper elevation={2} sx={{
                        p: { xs: 3, md: 5 },
                        height: '100%', display: 'flex',
                        borderRadius: 8,
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        flexDirection: 'column', justifyContent: 'space-between'
                    }}>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 1 }}>
                            Connect With Me
                        </Typography>
                        <Typography variant="body1" color="secondary.contrastText" sx={{ mb: 2 }}>
                            I&apos;m active on various platforms. Feel free to follow, reach out, or check out my work!
                        </Typography>

                        <List>
                            {
                                [
                                    {
                                        label: 'Phone number',
                                        value: ['+254 757655145', '+252 633606331'],
                                        icon: <PhoneCall />,
                                    },
                                    {
                                        label: 'Email',
                                        value: ['xasanaxmed654@gmail.com', 'nourdroidsoft@gmail.com'],
                                        icon: <Email />,
                                    },
                                    {
                                        label: 'Location',
                                        value: ['Nairobi, Kenya'],
                                        icon: <LocationOn />,
                                    },
                                    {
                                        label: 'Availability',
                                        value: ['Freelance / Remote / Part-Time / Full-Time'],
                                        icon: <EventAvailable />,
                                    }
                                ].map((contact, index) => (
                                    <ListItem
                                        key={index}
                                        disablePadding
                                        sx={{
                                            px: 0,
                                            py: 2,
                                            alignItems: 'flex-start',
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                color: 'primary.contrastText',
                                                mr: 2,
                                                bgcolor: 'primary.dark',
                                                borderRadius: '50%',
                                                minWidth: 56,
                                                height: 56,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                                                "&:hover": {
                                                    backgroundColor: 'primary.light'
                                                }
                                            }}
                                        >
                                            {React.cloneElement(contact.icon, {
                                                sx: { fontSize: 28 }
                                            })}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    variant="subtitle1"
                                                    component="span"
                                                    sx={{
                                                        fontWeight: 600,
                                                        mb: 0.5
                                                    }}
                                                >
                                                    {contact.label}
                                                </Typography>
                                            }
                                            secondary={
                                                contact.value.map((value, index) => (
                                                    <Typography
                                                        key={index}
                                                        variant="body2"
                                                        component="span"
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'flex-start',
                                                            color: 'secondary.contrastText',
                                                            transition: 'color 0.3s ease',
                                                            wordBreak: 'break-word'
                                                        }}
                                                    >
                                                        {value}
                                                    </Typography>
                                                ))

                                            }
                                            sx={{ m: 0 }}
                                        />
                                    </ListItem>
                                ))
                            }
                        </List>
                        <Box sx={{ my: 4 }}>
                            <Stack direction="row" spacing={{ xs: 1, sm: 3 }}
                                justifyContent="center" flexWrap="wrap"> {/* Use Stack for alignment, allow wrapping */}
                                <IconButton aria-label="LinkedIn" href="https://linkedin.com/in/ha-dirie" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ '&:hover': { transform: 'scale(1.1)' } }}>
                                    <LinkedIn sx={{ fontSize: { xs: 24, md: 32 } }} />
                                </IconButton>
                                <IconButton aria-label="GitHub" href="https://github.com/ndirie" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ '&:hover': { transform: 'scale(1.1)' } }}>
                                    <GitHub sx={{ fontSize: { xs: 24, md: 32 } }} />
                                </IconButton>
                                <IconButton aria-label="Twitter" href="https://twitter.com/_hdirie_" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ '&:hover': { transform: 'scale(1.1)' } }}>
                                    <Twitter sx={{ fontSize: { xs: 24, md: 32 } }} />
                                </IconButton>
                                <IconButton aria-label="Email" href="mailto:nourdroidsoft@gmail.com" color="inherit" sx={{ '&:hover': { transform: 'scale(1.1)' } }}>
                                    <Email sx={{ fontSize: { xs: 24, md: 32 } }} />
                                </IconButton>
                            </Stack>
                        </Box>

                    </Paper>
                </Grid>

                {/* Contact Form Section */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Paper elevation={0} sx={{
                        p: { xs: 3, md: 5 }, height: '100%',
                        display: 'flex', flexDirection: 'column',
                        bgcolor: 'background.paper',
                        justifyContent: 'space-between',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        borderRadius: 8,
                    }}>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 3 }}>
                            Send Me a Message
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Your Name"
                                name="name"
                                margin="normal"
                                variant="standard"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                sx={{ mb: 2 }} // Spacing between fields
                            />
                            <TextField
                                fullWidth
                                label="Your Email"
                                name="email"
                                margin="normal"
                                variant="standard"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Subject"
                                name="subject"
                                margin="normal"
                                variant="standard"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                sx={{ mb: 2 }}
                                slotProps={{
                                    htmlInput: { spellCheck: false },
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Your Message"
                                name="message"
                                margin="normal"
                                variant="standard"
                                multiline
                                rows={6} // Increased rows for more message space
                                value={formData.message}
                                onChange={handleChange}
                                required
                                sx={{ mb: 3 }}
                                slotProps={{
                                    htmlInput: { spellCheck: false },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                loading={loading}
                                disabled={loading}
                                size="large"
                                fullWidth // Make button full width
                                sx={{ py: 1.5, borderRadius: 8 }} // Vertical padding for button
                            >
                                Send Message
                            </Button>
                            {message && (
                                <Alert variant='standard' severity={message.includes('failed') ? 'error' : 'success'} sx={{ mb: 3 }}>
                                    {message}
                                </Alert>
                            )}
                        </Box>
                    </Paper>
                </Grid>

            </Grid>
        </Box >
    );
}