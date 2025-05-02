import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { useMediaQuery, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import TimelineCard from '../TimelineCard/TimelineCard';

function ExperienceTimeline(props: { theme: any, experience: any }) {
    const muiTheme = useTheme();
    const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm')); // For screens <= 600px
    const isMediumScreen = useMediaQuery(muiTheme.breakpoints.between('sm', 'md')); // For screens between 600px and 960px
    const { theme, experience } = props;
    return (
        <Timeline position={isSmallScreen ? "right" : "alternate"}>
            {experience.experiences.map((item: any, index: number) => {
                return (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0', maxWidth: isSmallScreen ? "15vw" : undefined }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            <Typography variant={isSmallScreen ? "body2" : "h6"} component="span">
                                {item.duration}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined">
                                <DeveloperModeIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '24px', px: 2 }}>
                            {/* <Typography variant={isSmallScreen ? "body2" : "h6"} component="span">
                                {item.title}
                            </Typography> */}
                            <TimelineCard theme={theme} experience={item} />
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    );
};

export default ExperienceTimeline;