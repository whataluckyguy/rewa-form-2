import { Check } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  Input,
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
        <Box sx={{ flex: 0.5, marginRight: 2.5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography>Use Tables</Typography>
            </Box>
            <Button>Export</Button>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Input Parameters
            </Typography>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Solution GOR</Typography>
                {/* <Input type="text" /> */}
                <input type="text" />
                <Typography>scf/STB</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Oil Gateway</Typography>
                {/* <Input type="text" /> */}
                <input type="text" />
                <Typography>API</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Gas Gravity</Typography>
                {/* <Input type="text" /> */}
                <input type="text" />
                <Typography>sp. gravity</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Water Salinity</Typography>
                {/* <Input type="text" /> */}
                <input type="text" />
                <Typography>ppm</Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Impurities
            </Typography>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Mole Percent H2S</Typography>
                {/* <Input type="text" /> */}
                <input type="text" />
                <Typography>percent</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Mole Percent CO2</Typography>
                {/* <Input type="text" /> */}
                <input type="text" />
                <Typography>percent</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Mole Percent N2</Typography>
                {/* <Input type="text" /> */}
                <input type="text" />
                <Typography>percent</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 0.5, marginLeft: 2.5 }}>
          <Box
            sx={{
              minHeight: "15%",
              width: "100%",
              backgroundColor: "greenyellow",
              color: "white",
              display: "grid",
              placeItems: "center",
            }}
          >
            PVT is Matched
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Correlations
            </Typography>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Pb,Rs,Bo</Typography>
                {/* <Input type="text" /> */}
                <select>
                  <option value="Glaso">Glaso</option>
                </select>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Oil Viscosity</Typography>
                {/* <Input type="text" /> */}
                <select>
                  <option value="Petrosky et al">Petrosky et al</option>
                </select>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Pvt;
