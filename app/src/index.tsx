import * as React from "react";
import { render } from "react-dom";
import { makeStyles } from "@material-ui/styles";
import Card from "card";

const useStyles = makeStyles(
  {
    card: {
      borderRadius: 0,
      background: "green"
    }
  },
  { name: "CustomStyles", index: 1}
);

const StyledCard = props => {
  const customClasses = useStyles();

  return <Card classes={customClasses} />;
};

render(<StyledCard />, document.getElementById("root"));
