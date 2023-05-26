import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

interface ButtonProps {
  link: string;
  children?: any;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <Link className={classes.btn} href={this.props.link}>
        {this.props.children}
      </Link>
    );
  }
}

export default Button;
