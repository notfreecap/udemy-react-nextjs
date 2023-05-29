import React from "react";

interface LastSalePageProps {}

interface LastSalePageState {}

class LastSalePage extends React.Component<
  LastSalePageProps,
  LastSalePageState
> {
  state = { isLoading: true, data: [] };
  private data = [];

  private getData = () => {
    fetch("http://localhost:3100/sales")
      .then((response) => {
        response.json();
      })
      .then((data: any) => {
        this.state.isLoading = false;
        this.state.data = data;
        this.data = data;
      })
      .catch((error) => console.error(error));
  };

  // TODO: continue, take care with the infine loop XD

  render() {
    this.getData();
    // const [isLoading, setIsLoading] = useState<boolean>()
    this.setState({ isLoading: false });

    return (
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default LastSalePage;
