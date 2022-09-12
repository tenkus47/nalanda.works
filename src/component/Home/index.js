import React from "react";
import "./index.css";
import { Box, Typography, Button, Tooltip } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-scroll";
function index() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography ml={3} className="home-heading">
        The Seventeen Panditas of Nalanda Monastery
      </Typography>
      <Container
        sx={{
          display: { md: "block", xs: "flex" },
          flexDirection: "column",
        }}
      >
        <Box m={2} mt={3}>
          <Tooltip title="Thangka image depicting Shakaymuni Buddha and 17 Nalanda Pandits">
            <img
              src="https://fpmt.org/wp-content/webp-express/webp-images/uploads/sites/2/2012/05/17-Nalanda-Pandits_HHDL-Office-1-e1338579760327.jpg.webp"
              alt="nalanda "
              id="floated"
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            variant={{ xs: "body1", md: "h6" }}
            sx={{
              fontsize: { xs: 1, md: 3 },
              display: "inline",
            }}
          >
            The Seventeen Pandits of Nalanda Monastery refers to a grouping of
            seventeen of the most important and influential Mahayana Buddhist
            masters from India’s past. His Holiness the Dalai Lama frequently
            refers to himself as a follower of the lineage of the seventeen
            Nalanda masters today.
          </Typography>
          <Box
            sx={{ display: "flex", gap: 4, justifyContent: "flex-start" }}
            mt={3}
          >
            <Link
              to="Pandetas"
              smooth={true}
              spy={true}
              offset={-64}
              duration={500}
            >
              <Button variant="contained" color="info" size="large">
                Pendatas
              </Button>
            </Link>
            <Link
              to="Contact"
              smooth={true}
              spy={true}
              offset={-64}
              duration={500}
            >
              <Button variant="text" color="secondary">
                Contact
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default index;
