import ContrastIcon from '@mui/icons-material/Contrast';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";

function Header(props: { theme: any; setTheme: (theme: any) => void; }) {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (page: string) => {
        setAnchorElNav(null);
        const pageIndex = ['Home', 'Education & Certifications', 'Experience', 'Projects', 'Contact & Resume'].indexOf(page);
        if (pageIndex !== -1) {
            window.location.href = `/${pageRoutes[pageIndex]}`;
        } else {
            console.error(`Page "${page}" not found`);
        }
    };

    const { theme, setTheme } = props;
    const pages = ['Home', 'Education & Certifications', 'Experience', 'Projects', 'Contact & Resume'];
    const pageRoutes = ['home', 'education', 'experience', 'projects', 'contact'];

    return (
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.background.default, color: theme.palette.primary.main }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,
                            textAlign: 'left',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            window.location.href = "/";
                        }}
                    >
                        Rohan Deoli
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                    <Typography sx={{ textAlign: 'center', color: theme.palette.text.primary, ':hover': { backgroundColor: theme.palette.custom.headerHover } }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Rohan Deoli
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    handleCloseNavMenu(page);
                                    console.log(`Navigating to ${page}`);
                                }}
                                sx={{ mx: 1, my: 2, color: theme.palette.text.primary, display: 'block', ':hover': { backgroundColor: theme.palette.custom.headerHover } }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <IconButton>
                        <ContrastIcon
                            onClick={() => {
                                setTheme(theme.palette.mode)
                            }}
                            sx={{ color: theme.palette.primary.main }}
                        />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;