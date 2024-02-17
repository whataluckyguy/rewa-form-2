import { Check } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function Pvt() {
  return (
    <Box sx={{ backgroundColor: "gainsboro" }}>
      <AppBar position="static" color="default">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Button>Done</Button>
              <Button>Cancel</Button>
              <Button>Tables</Button>
              <Button>Match Data</Button>
              <Button>Regression</Button>
              <Button>Correlations</Button>
              <Button>Calculate</Button>
              <Button>Save</Button>
              <Button>Open</Button>
              <Button>Composition</Button>
            </Box>
            <Box>
              <Button>Help</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 0.5 }}>
          <Checkbox />
          <Typography>Use Tables</Typography>
          <Button>Export</Button>
        </Box>
        <Box sx={{ flex: 0.5 }}>Right</Box>
      </Box>
    </Box>
  );
}

export default Pvt;
