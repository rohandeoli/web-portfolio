import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";

function DegreeCard(props: { theme: any; degree: any }) {
    const { theme, degree } = props;

    return (
        <Card sx={{ maxWidth: '75vw', minWidth: '50vw', margin: 2, backgroundColor: theme.palette.background.paper }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }} aria-label="degree">
                        {degree.alt_name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={
                    <Typography
                        variant="h4"
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: { xs: '1.5rem', sm: '2rem' }
                        }}
                    >
                        {degree.title}
                    </Typography>
                }
                subheader={
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: { xs: '0.875rem', sm: '1rem' }
                        }}
                    >
                        {degree.duration}
                    </Typography>
                }
            />
            <CardContent>
                <Typography
                    variant="h5"
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}
                >
                    {degree.subtitle}
                </Typography>
                {degree.descriptions.map((description: string) => (
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        key={description}
                        sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                    >
                        {description}
                    </Typography>
                ))}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="open link"
                    onClick={() => window.open(degree.website_link, '_blank', 'noopener,noreferrer')}
                >
                    <OpenInNewIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default DegreeCard;