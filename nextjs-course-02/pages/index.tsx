import fs from "fs/promises";
import Link from "next/link";
import path from "path";
import React from "react";

interface HomePageProps {
  products?: any[];
}

interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  render() {
    const { products = [] } = this.props;

    return (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
