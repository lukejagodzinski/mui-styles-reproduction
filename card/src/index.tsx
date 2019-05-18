import * as React from "react";
import { makeStyles } from "@material-ui/styles";

const useDefaultStyles = makeStyles(
  {
    card: {
      padding: 10,
      background: "orange",
      borderRadius: 10
    }
  },
  { name: "DefaultStyles", index: 0 }
);

interface Props {
  classes: { card: string };
}

const Card: React.FC<Props> = props => {
  const defaultClasses = useDefaultStyles();
  return (
    <div className={[defaultClasses.card, props.classes.card].join(" ")}>
      CARD
    </div>
  );
};

export default Card;
