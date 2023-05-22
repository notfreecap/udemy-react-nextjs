import MeetupItem from "./meetup-item";
import classes from "./styles/meetup-list.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
