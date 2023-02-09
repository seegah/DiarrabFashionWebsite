import Link from "next/link";
import React from "react";

function ProductItem({ product }) {
  return (
    <div className="mb-5 mt-4 ml-auto mr-auto block rounded-lg border border-bold shadow-md">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow h-[300px] w-[250px]"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`} legacyBehavior>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p>
          {product.price}
          <span className="ml-1">CFA</span>
        </p>

        <button
          type="button"
          className="rounded-sm bg-gold py-2 shadow outline-none px-2 text-sm font-bebas font-bold"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
