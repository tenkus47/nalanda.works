import React from "react";
import { Container, Box } from "@mui/material";
import LinkComponent from "./Link";
import Celebrate from "../../img/celebrate.gif";
function index() {
  return (
    <Container>
      <Box
        height="100vh"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>We would love to hear from you .</h1>
        <LinkComponent />
        <img src={Celebrate} alt="celebrating" />
      </Box>
    </Container>
  );
}

export default index;
