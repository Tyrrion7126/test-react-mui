import { React, useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Stack, CardMedia, CardContent, CardHeader, Divider, Skeleton, Button, Container, Card, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

function Profile() {
    const svgImages = [["python.svg", "Python"], ["javascript.svg", "JavaScript"], ["react.svg", "ReactJS"], ["bootstrap.svg", "Bootstrap 5"], ["nodejs.svg", "NodeJS"]];
    
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Card
                    variant="outlined"
                    sx={{ bgcolor: `rgba(100, 100, 100, 0.1)`, marginTop: 10 }}
                >
                    <CardMedia image="src/assets/landscape.jpg" sx={{ width: 420, height: 140 }} />
                    <CardHeader
                        title={
                            <>
                                <Typography sx={{ color: `rgb(255, 255, 255, 0.8)`, fontFamily: "K2D", fontWeight: 600, fontSize: "20px" }}>Tyrion#0451</Typography>
                                <Typography variant="subtitle1" sx={{ color: `rgb(255, 255, 255, 0.5)`, fontFamily: "K2D", fontWeight: 400, fontSize: "15px" }}>17 years old.</Typography>
                            </>
                    }
                        avatar={<Avatar variant="dot" alt="Tyrion" src="src/assets/avatar.jpg" sx={{ width: 80, height: 80, marginTop: -10 }} />}
                    />
                </Card>
                <Card
                    variant="outlined"
                    sx={{ bgcolor: `rgba(100, 100, 100, 0.1)`, marginTop: 2 }}
                >
                    <CardHeader
                        title={<Typography sx={{ color: `rgb(255, 255, 255, 0.8)`,  fontFamily: "K2D", fontSize: 20, fontWeight: 500 }}>About Me</Typography>} />
                    <CardContent sx={{ marginTop: -4 }}>
                        <Typography variant="subtitle1" sx={{ color: `rgb(255, 255, 255, 0.5)`, fontFamily: "K2D", fontWeight: 400, fontSize: "15px" }}>I live in Kuningan, West Java, Indonesia.
                            I'm self-learning person who interested in developing Discord Bot and Website. 
                            Currently learning ReactJS and NodeJS.
                            My most used Programming language is Python.</Typography>
                    </CardContent>
                </Card>
                <Card
                    variant="outlined"
                    sx={{ bgcolor: `rgba(100, 100, 100, 0.1)`, marginTop: 2 }}
                >
                    <CardHeader
                        title={<Typography sx={{ color: `rgb(255, 255, 255, 0.8)`,  fontFamily: "K2D", fontSize: 20, fontWeight: 500 }}>GitHub Repositories</Typography>} />
                    <CardContent sx={{ marginTop: -4 }}>
                        <Typography variant="subtitle1" sx={{ color: `rgb(255, 255, 255, 0.5)`, fontFamily: "K2D", fontWeight: 400, fontSize: "15px" }}>WIP (Work in progress)</Typography>
                    </CardContent>
                </Card>
                <Card
                    sx={{ bgcolor: `rgba(100, 100, 100, 0.1)`, marginTop: 2 }}
                >
                    <CardHeader
                        title={<Typography sx={{ color: `rgb(255, 255, 255, 0.8)`,  fontFamily: "K2D", fontSize: 20, fontWeight: 500 }}>Technologies I use</Typography>} />
                    <CardContent>
                        <Stack direction="column" spacing={1}>
                           {svgImages.map((image, index) =>
                                <Box key={index} sx={{ display: "flex", width: "auto", borderRadius: 1, height: 40, bgcolor: `rgba(150, 150, 150, 0.1)` }}>
                                    <Avatar src={`src/assets/${image[0]}`} alt={image[1]} sx={{ marginTop: 0.9, marginLeft: 1, marginRight: 1, marginBottom: 6, borderRadius: 1, width: 25, height: 25 }} />
                                    <Typography sx={{ display: "flex", justifyContent: "end", marginLeft: "auto", fontFamily: "K2D", fontWeight: 400, marginTop: 1, marginRight: 1, color: `rgba(255, 255, 255, 0.8)` }}>{image[1]}</Typography>
                                </Box>
                            )}
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </ThemeProvider>
    )
}


export default Profile;
