import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import cert1 from '../../assets/images/fcc.png';

function CertificationsCard(props: { theme: any; certification: any; }) {
    const { theme, certification } = props;

    return (
        <Card sx={{ maxWidth: '75vw', minWidth: '50vw', margin: 2, backgroundColor: theme.palette.background.paper }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: theme.palette.primary.main }} aria-label="degree">
                        {certification.alt_name.charAt(0).toUpperCase()}
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
                        {certification.title}
                    </Typography>
                }
            />
            <CardMedia
                component="img"
                sx={{
                    height: { xs: '150px', sm: '194px' },
                    objectFit: 'cover'
                }}
                image={cert1}
                alt={certification.alt_name}
            />
            <CardContent>
                <Typography
                    variant="h5"
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: { xs: '1rem', sm: '1.25rem' }
                    }}
                >
                    {certification.subtitle}
                </Typography>
                {/* {certification.descriptions.map((description: string) => (
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        key={description}
                        sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
                    >
                        {description}
                    </Typography>
                ))} */}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="open link"
                    onClick={() => window.open(certification.certificate_link, '_blank', 'noopener,noreferrer')}
                >
                    <OpenInNewIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default CertificationsCard;