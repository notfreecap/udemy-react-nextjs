import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/card";
import classes from "./styles/meetup-item.module.css";

function MeetupItem(props) {
  const meetup = props.meetup;
  const favoriresCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriresCtx.itemisFavorite(meetup.id);
  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoriresCtx.removeFavorite(meetup.id);
      return;
    }
    favoriresCtx.addFavorite(meetup);
  }

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
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
