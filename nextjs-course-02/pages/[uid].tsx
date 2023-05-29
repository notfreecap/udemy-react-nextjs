import { GetServerSideProps } from "next";
import React from "react";

interface UserIdPageProps {
  id: string;
}

interface UserIdPageState {}

class UserIdPage extends React.Component<UserIdPageProps, UserIdPageState> {
  render() {
    return <h1>{this.props.id}</h1>;
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const userId = params?.uid;
  return {
    props: {
      id: `userid-${userId}`,
    },
  };
};

export default UserIdPage;
