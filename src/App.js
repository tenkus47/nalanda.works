import "./App.css";
import { connect } from "react-redux";
import Header from "./component/Header";
import Home from "./component/Home";
import React, { useEffect } from "react";
import { changeSelection } from "./helper/myAction.js";
import { Box } from "@mui/material";
import Contact from "./component/Contact";
import Pendeta from "./component/Pendeta";
import { Element, Events, scrollSpy } from "react-scroll";
import Divider from "@mui/material/Divider";
function App(props) {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Box className="main">
      <Element name={"header"} className="element">
        <Header />
      </Element>
      <Home />
      <Divider />
      <Element name={"Pandetas"} className="element">
        <Pendeta />
      </Element>
      <Element name={"Contact"} className="element">
        <Contact />
      </Element>
    </Box>
  );
}

export default App;
// const mapStateToProps = (state) => {
//   return {
//     list: state.List,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeSelection: () => dispatch(changeSelection()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
