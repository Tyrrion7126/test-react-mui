import React from "react";
// import "@fontsource/k2d/700.css"
import { Typography, Box, Container } from "@mui/material";

class Greetings extends React.Component {
    render() {
        return (
            <Container sx={{ marginTop: "80px" }}
            >
                    <Typography 
                        align="center"
                        sx={{  fontFamily: "K2D", fontWeight: 300, opacity: 0.8, display: "flex", justifyContent: "center", fontSize: "25px" }}
                    >
                        <span style={{ fontWeight: 700, color: "orange", marginLeft: -10, marginTop: -6, fontSize: "30px", boxShadow: "0px 2px 0px 0px" }}>Hello</span> visitor
                    </Typography>
                    <Typography 
                        align="center"
                        sx={{ marginTop: -1, fontFamily: "K2D", fontWeight: 400, opacity: 0.8, display: "flex", justifyContent: "center", fontSize: "40px" }}
                    >I am <span style={{ textDecoration: "underline", fontWeight: 700, marginLeft: 5, color: `rgba(25, 118, 210, 1.0)` }}>Tyrion</span>
                        <Box variant="outlined">
                        </Box>
                    </Typography>
                    <Typography
                        align="center"
                        sx={{ fontFamily: "K2D", fontWeight: 400, opacity: 0.6, display: "flex", justifyContent: "center" }}
                    >
                        I'm beginner Discord Bot Dev and Web Developer from West Java, Indonesia.
                    </Typography>
            </Container>
        );
    }
}

export default Greetings;