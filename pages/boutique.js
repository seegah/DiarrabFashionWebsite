import Head from "next/head";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const boutique = () => {
  const [productsInfo, setProductsInfo] = useState();
  useEffect(() => {
    fetch("api/products")
      .then((response) => response.json())
      .then((json) => setProductsInfo(json));
  }, []);
  const categoriesNames = [...new Set(productsInfo?.map((p) => p.category))];
  return (
    <div>
      <Head>
        <title>DIARRA'B FASHION SHOP</title>
      </Head>
      <div className="p-5">
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            <h2 className="text-2xl py-5 mx-5 capitalize">{categoryName}</h2>
            <div className="flex overflow-x-scroll snap-x scrollbar-hide">
              {productsInfo
                .filter((p) => p.category === categoryName)
                .map((productInfo) => (
                  <div key={productInfo._id} className="px-5 snap-start ">
                    <Product {...productInfo} />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default boutique;
