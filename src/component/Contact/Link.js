import React from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Popper,
  Fade,
  Paper,
} from "@mui/material";
import { Facebook, Twitter, Reddit, Link } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";

import { darken } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    // padding: theme.spacing(2),
  },
  btn: {
    backgroundColor: "#26a27b",
    color: "rgba(255,255,255,0.9)",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: darken("#26a27b", 0.9085),
    },
  },
}));

export default function DropdownShareButton() {
  const classes = useStyles();

  const handleShare = (e) => {
    e.preventDefault();

    const ahref = window.location.href;
    const encodedAhref = encodeURIComponent(ahref);
    var link;

    switch (e.currentTarget.id) {
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
        open(link);
        break;

      case "twitter":
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
        open(link);
        break;

      case "reddit":
        link = `https://www.reddit.com/submit?url=${encodedAhref}`;
        open(link);
        break;

      case "copy":
        navigator.clipboard.writeText(ahref);
        break;

      default:
        break;
    }
  };

  const open = (socialLink) => {
    window.open(socialLink, "_blank");
  };

  return (
    <div>
      <PopupState variant="popper" popupId="demo-popup-popper">
        {(popupState) => (
          <div>
            <Button
              className={classes.btn}
              color="inherit"
              {...bindToggle(popupState)}
            >
              <PermContactCalendarIcon
                size={20}
                style={{ marginRight: ".52575em", marginTop: "-.22em" }}
              />
              Contact us
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <List dense={true} className={classes.paper}>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="facebook"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <Facebook />
                        </ListItemIcon>
                        <ListItemText primary="Facebook" />
                      </ListItem>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="twitter"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <Twitter />
                        </ListItemIcon>
                        <ListItemText primary="Twitter" />
                      </ListItem>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="reddit"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <Reddit />
                        </ListItemIcon>
                        <ListItemText primary="Reddit" />
                      </ListItem>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="copy"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <Link />
                        </ListItemIcon>
                        <ListItemText primary="Copy Link" />
                      </ListItem>
                    </List>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
    </div>
  );
}
