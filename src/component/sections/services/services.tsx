import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { BugIcon, CodeIcon, PhoneIcon, ServerIcon } from "lucide-react";

const services = [
    {
        title: "Custom Web Development",
        description: "Modern, responsive websites using React, Next.js, Tailwind CSS, and more. I build fast, SEO-friendly web applications with clean code and intuitive user interfaces.",
        icon: <CodeIcon size={32} />
    },
    {
        title: "Android App Development",
        description: "Native mobile apps using Kotlin or Java with Android Studio. I create performant mobile applications following Material Design guidelines with proper architecture patterns.",
        icon: <PhoneIcon size={32} />
    },
    {
        title: "API & Backend Development",
        description: "Robust REST APIs using Spring Boot, Node.js, and MongoDB. I design scalable backend systems with proper authentication, database modeling, and API documentation.",
        icon: <ServerIcon size={32} />
    },
    {
        title: "Fixing Bugs or Optimizing Sites",
        description: "Debugging, refactoring, and improving web performance or responsiveness. I can analyze and fix existing codebases, improve load times, and resolve compatibility issues.",
        icon: <BugIcon size={32} />
    },

]

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    return (
        <Paper elevation={0} sx={{
            px: { xs: 2, sm: 4, md: 6 },
            py: 6,
            bgcolor: 'background.paper',
            color: 'primary.dark',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px',
            borderRadius: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
            gap: 2,
            "&:hover": {
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px',

            }
        }}>
            <Box sx={{
                bgcolor: 'transparent',
                color: 'primary.dark',
            }}>
                {service.icon}
            </Box>
            <Box>
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
                    {service.title}
                </Typography>
                <Typography component={"p"} variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
                    {service.description}
                </Typography>
            </Box>
        </Paper>
    )
}

const Services = () => {
    return (
        <Box
            id="services"
            component="section"
            sx={{
                px: { xs: 2, sm: 4, md: 8 },
                py: 10,
                position: 'relative',
                overflow: 'hidden',
                color: 'text.primary',
                bgcolor: 'background.paper'
            }}>
            <Box>
                <Typography variant="h5" component="h2" sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 2,
                    position: 'relative',
                    "&::after": {
                        position: "absolute",
                        bottom: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: '10%',
                        content: "''",
                        bgcolor: 'primary.main',
                        width: '10%',
                        height: '1px'
                    }
                }}>
                    Services
                </Typography>
                <Typography variant="body1" component="p" sx={{
                    maxWidth: '700px',
                    mb: 4,
                    color: 'text.secondary'
                }}>
                    What services or features can I offer to visitors/users on my portfolio website (the frontend UI side), not behind-the-scenes?
                </Typography>
            </Box>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    {services.map((service, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                            <ServiceCard service={service} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Services;