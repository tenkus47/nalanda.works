import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Container, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

function Namecards({ setIndex }) {
  const data = useSelector((data) => data.List);
  const [selected, SetSelected] = useState(0);
  const [selectedPendeta, setSelectedPendeta] = useState(1);
  const handleSelection = (e) => {
    const num = parseInt(e.target.value);
    setSelectedPendeta(num);
    setIndex(num - 1);
  };
  useEffect(() => {
    // goToPage(selected);
  }, [selected]);

  const handleClick = (id) => {
    SetSelected(id);
    setIndex(parseInt(id));
  };
  return (
    <>
      <Container sx={{ marginTop: 2, display: { md: "block", xs: "none" } }}>
        <Grid container spacing={2}>
          {data.map((pan, index) => (
            <Grid item md={2} key={pan.id} onClick={() => handleClick(index)}>
              <Item>{pan.name}</Item>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ marginTop: 2, display: { md: "none", xs: "block" } }}>
        <label htmlFor="selection"> Select Pendeta : </label>
        <Select
          id="selection"
          onChange={handleSelection}
          value={selectedPendeta}
        >
          {data.map((pan, index) => (
            <MenuItem md={2} key={pan.id} value={pan.id}>
              {pan.name}
            </MenuItem>
          ))}
        </Select>
      </Container>
    </>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgb(7, 177, 77, 0.42)",
  },
  fontWeight: "bold",
  fontSize: 19,
}));

export default Namecards;
