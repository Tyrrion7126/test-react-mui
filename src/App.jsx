import React from 'react';
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Greetings from "./components/Greetings";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark"
    }
});

function App() {
	return (
		<ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Greetings />
            <Profile />
        </ThemeProvider>
    );
}

export default App;
