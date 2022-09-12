import React from "react";
import { useSelector } from "react-redux";
// import LazyLoad from "react-lazy-load";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  ButtonGroup,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./styles.css";

function ListOfPan({ index }) {
  // const dispatch = useDispatch();

  const data = useSelector((data) => data.List);
  return (
    <Carousel
      autoPlay={false}
      indicators={true}
      swipe={true}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      sx={{
        paddingInline: "20px",
        paddingBlock: "5px",
        maxWidth: "850px",
        margin: "0 auto",
      }}
      index={index}
    >
      {data.map((item, index) => {
        return <Banner item={item} key={index} />;
      })}
    </Carousel>
  );
}

type Item = {};

interface BannerProps {
  item: Item;
  length?: number;
}

const Banner = (props: BannerProps) => {
  const handleClick = (list) => window.open("https://parkhang.lopenling.org");

  // dispatch({ type: "changeSelection", data: list });

  const totalItems: number = props.length ? props.length : 2;
  const mediaLength = totalItems - 1;
  let items = [];
  const content = (
    <Grid item xs={8} lg={9} key="content" sx={{ background: "#ddad86" }}>
      <CardContent className="Content">
        <Typography className="Title" variant="h4">
          {props.item.name}
        </Typography>

        <Typography className="Caption" variant="h6">
          {props.item.desc}
        </Typography>
        <ButtonGroup disableElevation sx={{ gap: 1 }} variant="contained">
          <Button
            variant="outlined"
            className="ViewButton"
            onClick={handleClick}
          >
            GOOGLE
          </Button>
          <Button
            variant="outlined"
            className="ViewButton"
            onClick={handleClick}
          >
            LOPENLING
          </Button>
          <Button
            variant="outlined"
            className="ViewButton"
            onClick={handleClick}
          >
            BDRC
          </Button>
        </ButtonGroup>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item;

    const media = (
      <Grid item xs={4} lg={3} key={item.name}>
        <CardMedia className="Media" image={item.image} title={item.name}>
          <Typography className="MediaCaption">{item.nameEng}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  items.push(content);

  return (
    <Card raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Card>
  );
};

export default ListOfPan;
