import fs from "fs/promises";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import React, { Fragment } from "react";

interface ProductDetailPageProps {
  product: any;
}

interface ProductDetailPageState {}

class ProductDetailPage extends React.Component<
  ProductDetailPageProps,
  ProductDetailPageState
> {
  render() {
    return (
      <Fragment>
        <h1>{this.props.product.title}</h1>
        <p>{this.props.product.description}</p>
      </Fragment>
    );
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const productId = params?.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  const productFound = data?.products.find(
    (product: any) => product.id === productId
  );

  if (!productId || !productFound) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: productFound,
    },
  };
};

export default ProductDetailPage;
