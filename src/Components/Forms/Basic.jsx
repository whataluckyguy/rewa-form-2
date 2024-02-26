import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import "./Basic.css";

function Basic() {
  return (
    <Box
      height="70vh"
      sx={{ backgroundColor: "gainsboro", padding: 2, overflowY: "scroll" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10%",
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
          justifyContent: "space-between",
          height: "90%",
        }}
      >
        <Box width="48%" height="100%">
          <h3>Fluid Description</h3>

          <div className="formItems">
            <label htmlFor="fluid">Fluid</label>
            <select name="" id="">
              <option value="">Oil and Water</option>
            </select>
          </div>

          <div className="formItems">
            <label htmlFor="Method">Method</label>
            <select name="" id="">
              <option value="">Black Oil</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Separator">Separator</label>
            <select name="" id="">
              <option value="">Single-Stage Separator</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Emulsions">Emulsions</label>
            <select name="" id="">
              <option value="">No</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Hydrates">Hydrates</label>
            <select name="" id="">
              <option value="">Disable Warning</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Water Viscosity">Water Viscosity</label>
            <select name="" id="">
              <option value="">Use Default Correlation</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Viscosity Model">Viscosity Model</label>
            <select name="" id="">
              <option value="">Newtonian Fluid</option>
            </select>
          </div>
          <h3>Well</h3>
          <div className="formItems">
            <label htmlFor="Flow Type">Flow Type</label>
            <select name="" id="">
              <option value="">Tubing Flow</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Well Type">Well Type</label>
            <select name="" id="">
              <option value="">Producer</option>
            </select>
          </div>
          <h3>Artificial Lift</h3>
          <div className="formItems">
            <label htmlFor="Method">Method</label>
            <select name="" id="">
              <option value="">None</option>
            </select>
          </div>
          <h3>User Information</h3>
          <div className="formItems">
            <label htmlFor="Company">Company</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formItems">
            <label htmlFor="Field">Field</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formItems">
            <label htmlFor="Location">Location</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formItems">
            <label htmlFor="Well">Well</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formItems">
            <label htmlFor="Platform">Platform</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formItems">
            <label htmlFor="Analyst">Analyst</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formItems">
            <label htmlFor="Date">Date</label>
            <input type="date" name="" id="" />
          </div>
        </Box>
        <Box width="48%" height="1005">
          <h3>Calculation Type</h3>
          <div className="formItems">
            <label htmlFor="Predict">Predict</label>
            <select name="" id="">
              <option value="">Pressure and Temperature (Offshore)</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Model">Model</label>
            <select name="" id="">
              <option value="">Rough Approximation</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Range">Range</label>
            <select name="" id="">
              <option value="">Full System</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Output">Output</label>
            <select name="" id="">
              <option value="">Show calculating data</option>
            </select>
          </div>

          <h3>Well Completion</h3>
          <div className="formItems">
            <label htmlFor="Type">Type</label>
            <select name="" id="">
              <option value="">Cased Hole</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Sand Control">Sand Control</label>
            <select name="" id="">
              <option value="">None</option>
            </select>
          </div>

          <h3>Reservoir</h3>
          <div className="formItems">
            <label htmlFor="Inflow Type">Inflow Type</label>
            <select name="" id="">
              <option value="">Single Branch</option>
            </select>
          </div>
          <div className="formItems">
            <label htmlFor="Gas Type">Gas Type</label>
            <select name="" id="">
              <option value="">No</option>
            </select>
          </div>
          <div className="formItems">
            <h3>Comments (Ctrl-Enter for new line)</h3>

            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Basic;
