import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/events/error-alert";
import { Event } from "@/interfaces/event.interface";
import { API_URL } from "@/pages";
import { GetStaticPaths, GetStaticProps } from "next";
import { Fragment } from "react";

interface Props {
  event: Event;
}

const EventDetailPage = (props: Props) => {
  const event = props.event;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
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
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await (await fetch(API_URL)).json();
  const paths = events.map((event: Event) => ({ params: { id: event.id } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const id = params?.id;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const data = await fetch(`${API_URL}/${id}`);
  const event = await data.json();

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
};

export default EventDetailPage;
