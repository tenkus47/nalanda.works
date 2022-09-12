import React from "react";
import List from "./ListOfPan";
import Heading from "./Heading";
import Namecards from "./Namecards";
function Index(props) {
  const [index, setIndex] = React.useState();
  return (
    <div style={{ height: "100vh" }}>
      <Heading />
      <List index={index} />
      <Namecards setIndex={setIndex} />
    </div>
  );
}

export default Index;
