import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Typography, Container } from "@mui/material";
import theme from "./Theme";

function Greetings() {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ marginTop: "80px" }}>
                <Typography
                    align="center"
                    sx={{
                      fontFamily: "K2D",
                      fontWeight: 400,
                      opacity: 0.8,
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "25px",
                    }}
                >
                    <span
                      style={{
                        fontWeight: 700,
                        color: "#5cbd95",
                        marginLeft: -10,
                        marginTop: -6,
                        fontSize: "30px",
                        textDecoration: "underline",
                      }}
                    >
                    Hello 
                    </span>
                    visitor,
                </Typography>
                <Typography
                    align="center"
                    sx={{
                      marginTop: -1,
                      fontFamily: "K2D",
                      fontWeight: 400,
                      opacity: 0.8,
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "40px",
                    }}
                >
                    I am{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        fontWeight: 700,
                        marginLeft: 5,
                        color: "#ff4829"
                    }}
                >
                    Tyrion
                    </span>
                  </Typography>
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: "K2D",
                      fontWeight: 400,
                      opacity: 0.6,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    I'm beginner Discord Bot Dev and Web Developer from West Java, Indonesia.
                </Typography>
            </Container>
        </ThemeProvider>
    );
}

export default Greetings;