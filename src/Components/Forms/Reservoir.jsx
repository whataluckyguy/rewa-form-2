import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React from "react";
import "./Reservoir.css";

function Reservoir() {
  const Models = [
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

  const mechanicalSkins = [
    "Enter Skin By Hand",
    "Locke",
    "MacLeod",
    "Karaks+Tariq",
  ];

  return (
    <div className="reservoir">
      <div className="top">
        <h3>Model and Global Variable Selection</h3>
      </div>
      <div className="bottom">
        <div className="leftSide">
          <div className="leftHead">
            <h3>Reservoir Model</h3>
          </div>
          <div className="list">
            <List dense="true">
              {Models.map((item, index) => (
                <ListItemButton key={index}>
                  <ListItem>{item}</ListItem>
                </ListItemButton>
              ))}
            </List>
          </div>
        </div>
        <div className="rightSide">
          <div className="rightTop">
            <div id="list">
              <h4>Mechanical / Geometrical Skin</h4>
              <List dense="true">
                {mechanicalSkins.map((item, index) => (
                  <ListItemButton>
                    <ListItem>{item}</ListItem>
                  </ListItemButton>
                ))}
              </List>
            </div>
            <div id="list">
              <h4>Deviation and Partial Penetration Skin</h4>
              <List dense="true">
                <ListItemButton>
                  <ListItem>Wong CHford</ListItem>
                </ListItemButton>
              </List>
            </div>
          </div>
          <div className="rightBottom">
            <div id="segment">
              <label>Reservoir Pressure</label>
              <input type="number" name="" id="" />
              <label>psig</label>
            </div>
            <div id="segment">
              <label>Reservoir Temperature</label>
              <input type="number" name="" id="" />
              <label>deg F</label>
            </div>
            <div id="segment">
              <label>Water Cut</label>
              <input type="number" name="" id="" />
              <label>percent</label>
            </div>
            <div id="segment">
              <label>Total GOR</label>
              <input type="number" name="" id="" />
              <label>scf/STB</label>
            </div>
            <div id="segment">
              <label>Compaction Permeability Reduction Model</label>
              <select name="" id="">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            <div id="segment">
              <label>Relative Permeability</label>
              <select name="" id="">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservoir;
