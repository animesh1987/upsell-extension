import React from 'react';

interface ProductItemProp {
    product: {
        name: string;
        id: number;
        price: number;
    }
}

export const ProductItem: React.FC<ProductItemProp> = ({ product }) => {
    const onBuy: () => void = () => {
        console.log('buy clicked', product.id);
    }

    return (
        <div className="p-6 bg-white flex justify-between">
          <h4 className="font-semibold text-gray-900 w64">{product.name}</h4>
          <div className="mt-2 text-sm text-gray-600 w14">${product.price}</div>
          <button onClick={onBuy} className="w-32 mt-4 items-center rounded-lg bg-neutral-950 px-4 py-2 text-white hover:bg-neutral-800 transition">
            Add to Cart
          </button>
        </div>
      );
};
