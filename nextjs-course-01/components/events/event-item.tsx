import Button from "../ui/botton";
import classes from "./event-item.module.css";

export default function EventItem(props: any) {
  const { event } = props;

  return (
    <li className={classes.item}>
      <img src={event.image} alt={event.title}></img>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <time>{event.date}</time>
          </div>
          <div className={classes.address}>
            <address>{event.location.replace(", ", "\n")}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${event.id}`}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}
