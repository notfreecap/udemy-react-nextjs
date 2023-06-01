import ErrorAlert from "@/components/events/error-alert";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/botton";
import { Event } from "@/interfaces/event.interface";
import { API_URL } from "@/pages";
import { GetServerSideProps } from "next";
import { Fragment } from "react";
import EventList from "../../../components/events/event-list";

interface Props {
  events?: Event[];
  filter?: { year: number; month: number };
  hasError: boolean;
}

const FilteredEventPage = (props: Props) => {
  const { events, filter, hasError } = props;

  if (hasError || !filter) {
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

  if (!events || events.length === 0) {
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
      <ResultsTitle date={new Date(filter.year, filter.month - 1)} />
      <EventList events={events} />
    </Fragment>
  );
};

export default FilteredEventPage;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const filterData = context.params?.slug;

  if (!filterData) {
    return {
      props: {
        hasError: true,
      },
      // other options
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const respose = await fetch(API_URL);
  const data: Event[] = await respose.json();
  const events = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === +filterData[0] &&
      eventDate.getMonth() === +filterData[1] - 1
    );
  });

  return {
    props: {
      events,
      filter: { year: +filterData[0], month: +filterData[1] },
      hasError: false,
    },
  };
};
