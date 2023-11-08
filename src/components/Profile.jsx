import { React, useState } from "react";
import { Avatar, Button, Card, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader"

function Profile() {
    return (
        <div>
            <Card sx={{ marginTop: "100px", marginLeft: "30px" }}>
                <CardHeader title="Lorem" avatar="avatar.jpeg" />
            </Card>
        </div>
    )
}

export default Profile;