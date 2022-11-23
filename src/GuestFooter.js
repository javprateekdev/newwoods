import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GuestFooter() {
    return (
      <Paper sx={{marginTop: 'calc(10% + 60px)',
      width: '100%',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      background:'#015b51'
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
         
  
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            
            <Typography variant="caption" color="white">
            <h3>Disclaimer</h3>

            <p>This Website is not an official site and it belongs to the authorised channel partner for information purpose only.GODREJ WOODS RERA NO. UPRERAPRJ704730</p>
         
            </Typography>
          </Box>
        </Container>
      </Paper>
    );
  }