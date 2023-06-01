import EventList from "@/components/events/event-list";
import { Event } from "@/interfaces/event.interface";
import { GetStaticProps } from "next";
import Head from "next/head";

export const API_URL = "http://localhost:3001/events";

export default function HomePage(props: { events: Event[] }) {
  const events = props.events;

  if (!events) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Find a lot of great events that allow tou to evlolve..."
        />
      </Head>
      <EventList events={events} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${API_URL}?isFeatured=true`);
  const events = await response.json();

  return {
    props: {
      events: events,
    },
    revalidate: 1800,
  };
};
