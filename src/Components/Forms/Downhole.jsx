import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  sr,
  label,
  type,
  measuredDepth,
  tubingInsideDiameter,
  tubingInsideRoughness,
  tubingOutsideDiameter,
  tubingOutsideRoughness,
  casingInsideDiameter,
  casingInsideRoughness,
  rateMultiplier
) {
  return {
    sr,
    label,
    type,
    measuredDepth,
    tubingInsideDiameter,
    tubingInsideRoughness,
    tubingOutsideDiameter,
    tubingOutsideRoughness,
    casingInsideDiameter,
    casingInsideRoughness,
    rateMultiplier,
  };
}

const rows = [
  createData(
    "",
    "",
    "",
    "(feet)",
    "(inches)",
    "(inches)",
    "(inches)",
    "(inches)",
    "(inches)",
    "(inches)",
    ""
  ),
];

for (let index = 1; index <= 5; index++) {
  rows.push(createData(index, "WellHead", "Xmas Tree", 0, 3992));
}

export default function Downhole() {
  return (
    <Box>
      <Typography variant="h4">Input Data</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="right">Label</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
              <StyledTableCell align="right">Measured Depth</StyledTableCell>
              <StyledTableCell align="right">
                Tubing Inside Diameter
              </StyledTableCell>
              <StyledTableCell align="right">
                Tubing Inside Roughness
              </StyledTableCell>
              <StyledTableCell align="right">
                Tubing Outside Diameter
              </StyledTableCell>
              <StyledTableCell align="right">
                Tubing Outside Roughness
              </StyledTableCell>
              <StyledTableCell align="right">
                Casing Inside Diameter
              </StyledTableCell>
              <StyledTableCell align="right">
                Casing Inside Roughness
              </StyledTableCell>
              <StyledTableCell align="right">Rate Multiplier</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.sr}
                </StyledTableCell>
                <StyledTableCell align="right">{row.label}</StyledTableCell>
                <StyledTableCell align="right">{row.type}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.measuredDepth}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.tubingInsideDiameter}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.tubingInsideRoughness}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.tubingOutsideDiameter}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.tubingOutsideRoughness}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.casingInsideDiameter}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.casingInsideRoughness}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.rateMultiplier}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
