import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";

function Reservoir() {
  const items = [
    "PI Entry",
    "Vogel",
    "Composite",
    "Darcy",
    "Fetkovich",
    "MultiRate Fetkovich",
    "Jones",
    "MultiRate Jones",
    "Transient",
    "Hydraulically Fractured Well",
    "Horizontal Well - No Flow Boundaries",
    "Horizontal Well - Constant Pressure Upper Boundary",
    "MultiLayer Reservoir",
    "External Entry",
    "Horizontal Well - dP Friction Loss In WellBore",
    "MultiLayer - dP Loss in WellBore",
    "SkinAide (ELF)",
    "Dual Porosity",
    "Horizontal Well - Transverse Vertical Fractures",
    "SPOT",
  ];
  return (
    <div style={{ height: "100%" }}>
      <Box>
        <Typography variant="body1" fontWeight="bold">
          Model and Global Variable Selection
        </Typography>
      </Box>
      <Box sx={{ display: "flex", backgroundColor: "yellow" }}>
        <Box sx={{ flex: 0.4, marginRight: 2.5 }}>
          <Box
            sx={{
              minHeight: "5%",
              width: "100%",
              backgroundColor: "Gray",
              color: "red",
              display: "grid",
              placeItems: "center",
            }}
          >
            Reservoir Model
          </Box>
          <List sx={{ height: 600, overflowY: "scroll" }}>
            {items.map((item, index) => (
              <ListItem key={index} dense="true">
                <ListItemButton>{item}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ flex: 0.6, marginLeft: 2.5 }}>
          <Box sx={{ display: "flex" }}>
            <Box>Left</Box>
            <Box>Right</Box>
          </Box>
          <Box>Bottom</Box>
        </Box>
      </Box>
    </div>
  );
}

export default Reservoir;
