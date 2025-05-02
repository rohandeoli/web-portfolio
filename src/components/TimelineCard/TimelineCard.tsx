import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AddIcon from '@mui/icons-material/Add';

export default function TimelineCard(props: { theme: any, experience: any }) {
    const { theme, experience } = props;
    return (
        <Box sx={{}}>
            <Card variant="outlined">
                <Fragment>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {experience.title}
                        </Typography>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20 }}>
                            {experience.company}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{experience.location}</Typography>
                        {experience.description.map((desc: string, index: number) => (
                            <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
                                <LabelImportantIcon sx={{paddingTop: '12px'}} />{desc}
                            </Typography>
                        ))}
                        {experience.description.map((desc: string, index: number) => (
                            <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
                                <AddIcon sx={{paddingTop: '12px'}} />{desc}
                            </Typography>
                        ))}
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Fragment>
            </Card>
        </Box>
    );
}