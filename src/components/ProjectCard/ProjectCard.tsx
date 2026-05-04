import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { Icon } from "@iconify-icon/react";

function ProjectCard(props: { theme: any, project: any }) {
    const { theme, project } = props;

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.custom.projectCard }}>
            <CardHeader
                title={project.name}
            />
            <CardContent>
                {project.languages.map((language: any) => (
                    <Icon
                        key={language.name}
                        icon={language.iconifyClass}
                        style={{
                            fontSize: "2em",
                            color: theme.palette.custom.dark,
                            marginRight: "10px",
                        }}
                    />
                ))}
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                {project.links.map((link: any) => (
                    <a
                        href={link.url}
                        key={link.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                        aria-label={`View ${link.name} for ${project.name}`}
                    >
                        <Icon
                            icon={link.iconifyClass}
                            style={{
                                fontSize: "2em",
                                marginRight: "10px",
                                cursor: "pointer",
                            }}
                            title={link.name}
                        />
                    </a>
                ))}
            </CardActions>
        </Card>
    );
}

export default ProjectCard;