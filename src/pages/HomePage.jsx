import {
  Avatar,
  Box,
  Card,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import React from "react";

const HomePage = () => {
  return (
 <Container>
    <Card>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      </Card>

  
        <Paper elevation={3}>
          <Typography variant="h4"
          sx = {{
          backgroundColor: "primary.dark",
            
          }}>
            Hello, i am Alexandr Softwear developer from Taganrog
            <Avatar></Avatar>
          </Typography>
        </Paper>
     
      </Container>
  );
};

export default HomePage;
