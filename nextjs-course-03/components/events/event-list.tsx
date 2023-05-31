import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList(props: any) {
  const { events } = props;

  return (
    <ul className={classes.list}>
      {events.map((event: any) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
