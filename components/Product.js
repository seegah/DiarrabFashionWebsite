import React from "react";

export default function Product({ _id, name, price, picture }) {
  return (
    <div className="w-52">
      <div className="">
        <img src={picture} className="w-48 h-56" alt="" />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <p className="text-sm mt-1 leading-4 text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        error consequuntur facere consequatur, itaque, est dolorum, sit
        doloremque totam voluptatibus tempora. Saepe quo eius autem repellendus
        quos commodi ea libero!
      </p>
      <div className="flex mt-1">
        <div className="text-xs font-bold grow">{price}CFA</div>
        <button className="bg-gold text-black font-bold py-1 px-3 rounded-xl">
          +
        </button>
      </div>
    </div>
  );
}
