import "./App.css";
import { connect } from "react-redux";
import Index from "./component";
import { changeSelection } from "./helper/myAction.js";
import ReactPageScroller from "react-page-scroller";
import { Box, Typography } from "@mui/material";

function App() {
  const IMAGE_URL =
    "https://preview.redd.it/3hvyombnvpr61.jpg?width=960&crop=smart&auto=webp&s=f810a283e84750388de7f46639203e3ed63547f9";

  return (
    <ReactPageScroller>
      <Box sx={{ bgcolor: "#659dbd", height: "100%", overflow: "hidden" }}>
        <Index />
      </Box>
      <Box
        sx={{
          // background: `url(${IMAGE_URL})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Typography> Contact Us</Typography>
      </Box>
    </ReactPageScroller>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelection: () => dispatch(changeSelection()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
