import React, { Fragment } from "react";
import MainHeader from "./main-header";

interface LayoutProps {
  children: any;
}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  render() {
    return (
      <Fragment>
        <MainHeader />
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
