import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Paper,
  Container,
  IconButton,
  InputBase,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import MenuIcon from "@mui/icons-material/Menu";

function Namecards() {
  const data = useSelector((data) => data.List);
  const [selected, SetSelected] = useState(0);
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const handleClick = (id) => {
    SetSelected(id);
  };

  return (
    <>
      <center>
        {" "}
        <InputSearch />
      </center>

      <Container sx={{ marginTop: 2, display: { md: "block", xs: "none" } }}>
        <Grid container spacing={2}>
          {data.map((pan, index) => (
            <Grid item md={2} key={pan.id} onClick={() => handleClick(index)}>
              <Item>{pan.name}</Item>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

function InputSearch() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Pandeta"
        // inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
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
