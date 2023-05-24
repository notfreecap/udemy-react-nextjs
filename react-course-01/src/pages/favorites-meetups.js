import { useContext } from "react";
import MeetupList from "../components/meetups/meetup-list";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoriresCtx = useContext(FavoritesContext);

  let content;
  if (favoriresCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoriresCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
