import { useEffect, useState } from "react";
import useSWR from "swr";

interface Sale {
  id: number;
  username: string;
  volume: number;
}

interface Props {
  sales: Sale[];
}

const LastSalesPage = (props: Props) => {
  const [sales, setSales] = useState<Sale[]>(props.sales);

  const { data, error } = useSWR("http://localhost:3001/sales", (url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    data && setSales(data);
  }, [data]);

  if (error) {
    return <p>Error...</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {sales?.map((sale) => (
          <li key={sale.id}>{sale.username}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  return fetch("http://localhost:3001/sales").then((res) =>
    res.json().then((data) => ({ props: { sales: data }, revalidate: 10 }))
  );
}

export default LastSalesPage;
