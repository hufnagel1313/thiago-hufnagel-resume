import "./Card.css";

interface cardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = (props: cardProps) => {
  const classes = "card " + props.className;
  console.log(classes);
  return <div className={classes}>{props.children}</div>;
};

export default Card;
