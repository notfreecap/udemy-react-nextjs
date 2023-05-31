import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/dummy-data";
import { withRouter } from "next/router";
import { Component, Fragment } from "react";

interface AllEventsPageProps {
  router: any;
}

interface AllEventsPageState {}

class AllEventsPage extends Component<AllEventsPageProps, AllEventsPageState> {
  private events = getAllEvents();

  findEventsHandler = ({ year, month }: any) => {
    this.props.router.push(`/events/${year}/${month}`);
  };

  render() {
    return (
      <Fragment>
        <EventSearch onSearch={this.findEventsHandler} />
        <EventList events={this.events} />
      </Fragment>
    );
  }
}

export default withRouter(AllEventsPage);
