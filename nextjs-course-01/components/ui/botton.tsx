import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

interface ButtonProps {
  link?: string;
  onClick?: any;
  children?: any;
}

class Button extends React.Component<ButtonProps> {
  render() {
    if (this.props.link) {
      return (
        <Link className={classes.btn} href={this.props.link}>
          {this.props.children}
        </Link>
      );
    }

    return (
      <button className={classes.btn} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
