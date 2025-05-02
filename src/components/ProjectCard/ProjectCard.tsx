import { Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";

function ProjectCard(props: { theme: any, project: any }) {
    const { theme, project } = props;

    return (
        <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.custom.projectCard }}>
            <CardHeader
                title={project.name}
            />
            <CardContent>
                {project.languages.map((language: any) => (
                    <span
                        key={language.name}
                        className="iconify"
                        data-icon={language.iconifyClass}
                        data-inline="false"
                        style={{
                            fontSize: "2em",
                            color: theme.palette.custom.dark,
                            marginRight: "10px",
                        }}
                    ></span>
                ))}
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {project.description}
                </Typography>
            </CardContent>
            <CardActions>
                {project.links.map((link: any) => (
                    <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                        <span
                            key={link.name}
                            className="iconify"
                            data-icon={link.iconifyClass}
                            data-inline="false"
                            style={{
                                fontSize: "2em",
                                marginRight: "10px",
                                cursor: "pointer",
                            }}
                            onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
                            title={link.name}
                        ></span>
                    </a>
                ))}
            </CardActions>
        </Card>
    );
}

export default ProjectCard;