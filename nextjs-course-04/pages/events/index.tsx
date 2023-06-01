import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { Event } from "@/interfaces/event.interface";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next/types";
import { Fragment } from "react";
import { API_URL } from "..";

interface Props {
  events: Event[];
}

const AllEventsPage = (props: Props) => {
  const router = useRouter();
  const findEventsHandler = ({ year, month }: any) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow tou to evlolve..."
        />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={props.events} />
    </Fragment>
  );
};

export default AllEventsPage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(API_URL);
  const events = await response.json();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};
