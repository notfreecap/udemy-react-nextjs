import { Link } from "react-router-dom";

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./styles/main-navigation.module.css";

function MainNavigation() {
  const favoriresCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new">New meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My favorires{" "}
              <span className={classes.badge}>
                {favoriresCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
