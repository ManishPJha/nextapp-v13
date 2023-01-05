import { NextPageContext } from "next";
import React, { Fragment, useEffect, useState } from "react";

const ProductsPage = (props: any) => {
  const { data } = props;

  const [products, setProducts] = useState<Array<any>>([]);

  useEffect(() => {
    if (data.length > 0) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div>
      products
      {products.map((product, index) => {
        return (
          <Fragment key={index}>
            <div className="prducts-main">
              <div className="product-details">
                <a href={product.url}>{product.title}</a>
                <img src={product.thumbnailUrl} alt={product.title} />
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ProductsPage;

export const getServerSideProps = async (ctx: NextPageContext) => {
  const request = await fetch(
    process.env.NODE_ENV === "development"
      ? `http://${ctx.req?.headers.host}/api/products`
      : `https://${ctx.req?.headers.host}/api/products`
  );
  const json = await request.json();

  return {
    props: {
      data: json.data,
    },
  };
};
