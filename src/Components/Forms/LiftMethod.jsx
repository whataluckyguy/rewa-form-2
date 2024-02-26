import React from "react";
import "./LeftMethod.css";
import { List, ListItem, ListItemButton } from "@mui/material";

function LiftMethod() {
  return (
    <div className="liftMethod">
      <div className="liftMethodLeft">
        <div className="leftone">
          <div className="leftoneTop">
            <h3 id="head">Input Data</h3>
            <div className="inputItem">
              <label>GasLift Gas Gravity</label>
              <input type="number" name="" id="" />
              <label>sp. gravity</label>
            </div>
            <div className="inputItem">
              <label>Mole Percent H2S</label>
              <input type="number" name="" id="" />
              <label>percent</label>
            </div>
            <div className="inputItem">
              <label>Mole Percent CO2</label>
              <input type="number" name="" id="" />
              <label>percent</label>
            </div>
            <div className="inputItem">
              <label>Mole Percent N2</label>
              <input type="number" name="" id="" />
              <label>percent</label>
            </div>
            <div className="inputItem">
              <label>GLR Injected</label>
              <input type="number" name="" id="" />
              <label>scf/STB</label>
            </div>
            <div className="inputItem">
              <label>Injected Gas Rate</label>
              <input type="number" name="" id="" />
              <label>MMscf/day</label>
            </div>
            <div className="inputItem">
              <label>GLR/Rate ?</label>
              <List sx={{ overflowY: "scroll" }} dense="true">
                <ListItemButton>
                  <ListItem>Use GLR Injected</ListItem>
                </ListItemButton>
                <ListItemButton>
                  <ListItem>Use Injected Gas Rate</ListItem>
                </ListItemButton>
              </List>
            </div>
          </div>
          <div className="leftoneBottom">
            <label>Gas Lift Method</label>
            <List sx={{ overflowY: "scroll" }} dense="true">
              <ListItemButton>
                <ListItem>Fixed Depth of Injection</ListItem>
              </ListItemButton>
              <ListItemButton>
                <ListItem>Optimum Depth of Injection</ListItem>
              </ListItemButton>
              <ListItemButton>
                <ListItem>Valve Depths Specified</ListItem>
              </ListItemButton>
            </List>
          </div>
        </div>
        <div className="lefttwo">
          <h3 id="head">GasLift Details</h3>
          <div className="inputItem">
            <label>GasLift Valve Depth (Measured)</label>
            <input type="number" name="" id="" />
            <label>feet</label>
          </div>
        </div>
      </div>
      <div className="liftMethodRight">
        <h3 id="head">Input Data</h3>
        <div className="list-one">
          <div className="inputItem">
            <label>Pump Depth (Measured)</label>
            <input type="number" name="" id="" />
            <label>feet</label>
          </div>
          <div className="inputItem">
            <label>Operating Frequency</label>
            <input type="number" name="" id="" />
            <label>Hertz</label>
          </div>
          <div className="inputItem">
            <label>Maximum OD</label>
            <input type="number" name="" id="" />
            <label>inches</label>
          </div>
          <div className="inputItem">
            <label>Length of Cable</label>
            <input type="number" name="" id="" />
            <label>feet</label>
          </div>
          <div className="inputItem">
            <label>Gas Separator Efficiency</label>
            <input type="number" name="" id="" />
            <label>percent</label>
          </div>
          <div className="inputItem">
            <label>Number of Stages</label>
            <input type="number" name="" id="" />
            <label> </label>
          </div>
          <div className="inputItem">
            <label>Voltage at Surface</label>
            <input type="number" name="" id="" />
            <label>Volts</label>
          </div>
          <div className="inputItem">
            <label>Pump Wear Factor</label>
            <input type="number" name="" id="" />
            <label>fraction</label>
          </div>
          <div className="inputItem">
            <label>Gas DeRating Model</label>
            <select>
              <option value="">none</option>
            </select>
          </div>
        </div>
        <div className="list-two">
          <label htmlFor="">Current Pump</label>
          <select name="" id="">
            <option value=""></option>
          </select>
          <label htmlFor="">Current Motor</label>
          <select name="" id="">
            <option value=""></option>
          </select>
          <label htmlFor="">Current Cable</label>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default LiftMethod;
