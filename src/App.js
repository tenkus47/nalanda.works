import "./App.css";
import { connect } from "react-redux";
import Header from "./component/Header";
import Home from "./component/Home";
import React, { useEffect } from "react";
import { changeSelection } from "./helper/myAction.js";
import { Box } from "@mui/material";
import Section3 from "./component/Contact";
import Pendeta from "./component/Pendeta";
import { Element, Events, scrollSpy } from "react-scroll";
import Divider from "@mui/material/Divider";
function App(props) {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <Box>
      <Element name={"header"} className="element">
        <Header />
      </Element>
      <Home />
      <Divider />
      <Element name={"Pandetas"} className="element">
        <Pendeta />
      </Element>
      <Element name={"Contact"} className="element">
        <Section3 />
      </Element>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.List,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelection: () => dispatch(changeSelection()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
