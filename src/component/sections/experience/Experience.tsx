import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { ListItemIcon, Avatar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { experiences } from './experiences';

export default function Experience() {
    return (
        <Box id="experience" component="section" sx={{
            py: 10,
            bgcolor: 'background.paper',
            color: 'text.primary',
            boxShadow: 'none',
            borderBottom: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
        }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Experience
            </Typography>
            <List>
                {experiences.map((exp, index) => (
                    <Box key={index}>
                        <ListItem alignItems="flex-start">
                            {exp.image && (
                                <ListItemIcon sx={{ mt: 1, mr: 2 }}> {/* Margin top for alignment, margin right for spacing */}
                                    <Avatar alt={exp.company} src={exp.image} sx={{ width: 60, height: 60 }} />
                                </ListItemIcon>
                            )}
                            <Box>
                                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                                        {exp.role}
                                    </Typography>
                                    <Box component="span">
                                        <Typography component="span" variant="body1" color="text.primary" display="block">
                                            {exp.company} | {exp.period}
                                        </Typography>
                                        <Typography component="span" variant="body2" color="text.secondary" display="block" sx={{ mt: 1, mb: 1 }}>
                                            {exp.description}
                                        </Typography>
                                    </Box>
                                {/* Responsibilities List */}
                                {exp.responsibilities && (
                                    <List sx={{ pt: 0 }}> {/* Remove top padding to align with description */}
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <ListItem key={idx} disablePadding sx={{ alignItems: 'flex-start', mb: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: '30px', mt: '3px' }}> {/* Adjust minWidth and mt for icon alignment */}
                                                    <CheckCircleOutlineIcon fontSize="small" color="primary" /> {/* Example icon */}
                                                </ListItemIcon>
                                                <ListItemText primary={
                                                    <Typography variant="body2" color="text.secondary">
                                                        {responsibility}
                                                    </Typography>
                                                } />
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </Box>
                        </ListItem>
                        {index < experiences.length - 1 && <Divider component="li" sx={{ my: 3 }} />} {/* Add vertical margin to divider */}
                    </Box>
                ))}
            </List>
        </Box>
    );
}