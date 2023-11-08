import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { IconButton, Toolbar, AppBar } from '@mui/material';

function redirectGithub() {
    window.open("https://github.com/Tyrrion7126");
}

function Navbar() {
  return (
      <div>
        <AppBar color="transparent" position="fixed" sx={{ border: 1, borderColor: `rgba(0, 0, 0, 0.2)`, boxShadow: "none" }}>
          <Toolbar>
            <IconButton
                edge="end"
                color="primary"
                size="small"
                aria-label="menu"
                sx={{ border: 1, borderColor: `rgba(0, 0, 0, 0.2)`, borderRadius: "12px", padding: "5px" }}
            >
                <DragHandleIcon />
            </IconButton>
            <IconButton
                onClick={() => {redirectGithub()}}
                edge="start"
                color="primary"
                size="small"
                aria-label="github"
                sx={{ marginLeft: "auto", border: 1, borderColor: `rgba(0, 0, 0, 0.2)`, borderRadius: "12px", padding: "5px" }}
            >
                <GitHubIcon />
            </IconButton>
            <IconButton
                edge="start"
                color="primary"
                size="small"
                aria-label="github"
                sx={{ marginLeft: "10px", border: 1, borderColor: `rgba(0, 0, 0, 0.2)`, borderRadius: "12px", padding: "5px" }}
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                edge="start"
                color="primary"
                size="small"
                aria-label="github"
                sx={{ marginLeft: "10px", border: 1, borderColor: `rgba(0, 0, 0, 0.2)`, borderRadius: "12px", padding: "5px" }}
            >
                <SettingsOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
}
export default Navbar;