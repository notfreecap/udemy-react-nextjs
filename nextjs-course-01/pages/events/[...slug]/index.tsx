import ErrorAlert from "@/components/events/error-alert";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/botton";
import { getFilteredEvents } from "@/dummy-data";
import { NextRouter, withRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../../components/events/event-list";

interface FilteredEventPageProps {
  router: NextRouter;
}

interface FilteredEventPageState {}

class FilteredEventPage extends React.Component<
  FilteredEventPageProps,
  FilteredEventPageState
> {
  private filterData = this.props.router.query.slug;

  render() {
    if (!this.filterData) {
      return (
        <Fragment>
          <ErrorAlert>
            <p className="center">Loading...</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </Fragment>
      );
    }

    const year = +this.filterData[0];
    const month = +this.filterData[1];

    const filteredEvents = getFilteredEvents({ year, month });

    if (!filteredEvents || filteredEvents.length === 0) {
      return (
        <Fragment>
          <ErrorAlert>
            <p className="center">No events found for the chosen filter!</p>
          </ErrorAlert>
          <div className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <ResultsTitle date={new Date(year, month - 1)} />
        <EventList events={filteredEvents} />
      </Fragment>
    );
  }
}

export default withRouter(FilteredEventPage);
