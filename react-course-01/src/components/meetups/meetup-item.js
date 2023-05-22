import Card from "../ui/card";
import classes from "./styles/meetup-item.module.css";

function MeetupItem(props) {
  const meetup = props.meetup;
  return (
    <li className={classes.item} key={meetup.id}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button>TO FAVORITES</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
