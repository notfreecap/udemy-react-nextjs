import Link from "next/link";
import { Component } from "react";
import classes from "./main-header.module.css";

class MainHeader<T> extends Component<T> {
  render() {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href="/">Next events</Link>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MainHeader;
