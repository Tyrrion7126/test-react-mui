import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { IconButton, Toolbar, AppBar } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

function redirectGithub() {
    window.open("https://github.com/Tyrrion7126");
}

function Navbar() {
  return (
      <ThemeProvider theme={theme}>
        <AppBar color="transparent" position="fixed" sx={{ borderBottom: 1, borderColor:`rgba(255, 255, 255, 0.3)`, boxShadow: "none", backdropFilter: "blur(20px)" }}>
          <Toolbar>
            <IconButton
                edge="end"
                color="primary"
                size="small"
                aria-label="menu"
                sx={{ border: 1, borderColor: `rgba(255, 255, 255, 0.3)`, borderRadius: "13px", padding: "4px" }}
            >
                <DragHandleIcon />
            </IconButton>
            <IconButton
                onClick={() => {redirectGithub()}}
                edge="start"
                color="primary"
                size="small"
                aria-label="github"
                sx={{ marginLeft: "auto", border: 1, borderColor: `rgba(255, 255, 255, 0.3)`, borderRadius: "13px", padding: "4px" }}
            >
                <GitHubIcon />
            </IconButton>
            <IconButton
                edge="start"
                color="primary"
                size="small"
                aria-label="github"
                sx={{ marginLeft: "10px", border: 1, borderColor: `rgba(255, 255, 255, 0.3)`, borderRadius: "13px", padding: "4px" }}
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                edge="start"
                color="primary"
                size="small"
                aria-label="github"
                sx={{ marginLeft: "10px", border: 1, borderColor: `rgba(255, 255, 255, 0.3)`, borderRadius: "13px", padding: "4px" }}
            >
                <SettingsOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
}
export default Navbar;