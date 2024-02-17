import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function Basic() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* fluid type */}
        <FormControl sx={{ m: 0.5, minWidth: 200 }} size="small">
          <InputLabel>Fluid Type</InputLabel>
          <Select>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
          </Select>
        </FormControl>
        {/* Lift method */}
        <FormControl sx={{ m: 0.5, minWidth: 200 }} size="small">
          <InputLabel>Lift Method</InputLabel>
          <Select>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
          </Select>
        </FormControl>
        {/* Comletion type */}
        <FormControl sx={{ m: 0.5, minWidth: 200 }} size="small">
          <InputLabel>Comletion Type</InputLabel>
          <Select>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box>
          <label>Fluid Description</label>
          <br />
          <label htmlFor="fluid">Fluid</label>
          <select name="" id="">
            <option value="">Oil and Water</option>
          </select>
          <br />
          <label htmlFor="Method">Method</label>
          <select name="" id="">
            <option value="">Black Oil</option>
          </select>
          <br />
          <label htmlFor="Separator">Separator</label>
          <select name="" id="">
            <option value="">Single-Stage Separator</option>
          </select>
          <br />
          <label htmlFor="Emulsions">Emulsions</label>
          <select name="" id="">
            <option value="">No</option>
          </select>
          <br />
          <label htmlFor="Hydrates">Hydrates</label>
          <select name="" id="">
            <option value="">Disable Warning</option>
          </select>
          <br />
          <label htmlFor="Water Viscosity">Water Viscosity</label>
          <select name="" id="">
            <option value="">Use Default Correlation</option>
          </select>
          <br />
          <label htmlFor="Viscosity Model">Viscosity Model</label>
          <select name="" id="">
            <option value="">Newtonian Fluid</option>
          </select>
          <br />
          <br />
          <label>Well</label>
          <br />
          <label htmlFor="Flow Type">Flow Type</label>
          <select name="" id="">
            <option value="">Tubing Flow</option>
          </select>
          <br />
          <label htmlFor="Well Type">Well Type</label>
          <select name="" id="">
            <option value="">Producer</option>
          </select>
          <br />
          <br />
          <label>Artificial Lift</label>
          <br />
          <label htmlFor="Method">Method</label>
          <select name="" id="">
            <option value="">None</option>
          </select>
          <br />
          <br />
          <label>User Information</label>
          <br />
          <label htmlFor="Company">Company</label>
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Field">Field</label>
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Location">Location</label>
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Well">Well</label>
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Platform">Platform</label>
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Analyst">Analyst</label>
          <input type="text" name="" id="" />
          <br />
          <label htmlFor="Date">Date</label>
          <input type="date" name="" id="" />
        </Box>
        <Box>
          <label htmlFor="">Calculation Type</label>
          <br />
          <label htmlFor="Predict">Predict</label>
          <select name="" id="">
            <option value="">Pressure and Temperature (Offshore)</option>
          </select>
          <br />
          <label htmlFor="Model">Model</label>
          <select name="" id="">
            <option value="">Rough Approximation</option>
          </select>
          <br />
          <label htmlFor="Range">Range</label>
          <select name="" id="">
            <option value="">Full System</option>
          </select>
          <br />
          <label htmlFor="Output">Output</label>
          <select name="" id="">
            <option value="">Show calculating data</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Well Completion</label>
          <br />
          <label htmlFor="Type">Type</label>
          <select name="" id="">
            <option value="">Cased Hole</option>
          </select>
          <br />
          <label htmlFor="Sand Control">Sand Control</label>
          <select name="" id="">
            <option value="">None</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Reservoir</label>
          <br />
          <label htmlFor="Inflow Type">Inflow Type</label>
          <select name="" id="">
            <option value="">Single Branch</option>
          </select>
          <br />
          <label htmlFor="Gas Type">Gas Type</label>
          <select name="" id="">
            <option value="">No</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Comments (Ctrl-Enter for new line)</label>
          <br />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </Box>
      </Box>
    </Box>
  );
}

export default Basic;
