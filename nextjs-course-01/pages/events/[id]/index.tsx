import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { NextRouter, withRouter } from "next/router";
import React, { Fragment } from "react";

interface EventDetailPageProps {
  router: NextRouter;
}

class EventDetailPage extends React.Component<EventDetailPageProps> {
  render() {
    const eventId = this.props.router.query.id;

    const event = getEventById(eventId);

    if (!event) {
      return <p>No event found!</p>;
    }

    return (
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    );
  }
}

export default withRouter(EventDetailPage);
