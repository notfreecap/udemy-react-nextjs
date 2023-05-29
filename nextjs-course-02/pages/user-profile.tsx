import { GetServerSideProps } from "next";
import React from "react";

interface UserProfilePageProps {
  username: string;
}

interface UserProfilePageState {}

class UserProfilePage extends React.Component<
  UserProfilePageProps,
  UserProfilePageState
> {
  render() {
    return <h1>{this.props.username}</h1>;
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req, res } = context;

  //   console.log(req);
  //   console.log(res);

  return {
    props: {
      username: "max",
    },
  };
};

export default UserProfilePage;
