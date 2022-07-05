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
            margin:"auto",
            display: "flex",
            justifyContent: 'space-between',
            alignItems: "center",
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              color: "text.secondary",
              display: "inline",
              fontSize: 14,
            }}
          >
            asdasdasd

          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              color: "text.secondary",
              display: "inline",
              fontSize: 14,
            mx: 0.5,

            }}
          >
            asdasdasd

          </Box>
        </Box>
      </Card>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "inherit",
        }}
      >
        <Typography variant="h4">
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
          Hello, i am Alexandr Softwear developer from Taganrog
        </Typography>
        <Avatar
          // alt="MEEEEE"
          src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
          sx={{ 
            width: '10rem', 
            height: '10rem',
            padding: 0,
            margin: '0rem'
          }}
        />
      </Paper>
      /*-------------------- */
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            color: "text.secondary",
          }}
        >
          Sessions
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            color: "text.primary",
            fontSize: 34,
            fontWeight: "medium",
          }}
        >
          98.3 K
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",

            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box
          sx={{
            bgcolor: "background.paper",
            color: "text.secondary",
            display: "inline",
            fontSize: 14,
          }}
        >
          vs. last week
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
