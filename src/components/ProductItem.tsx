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
        <div className="max-w-md rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
          <h3 className="text-xl font-semibold text-gray-900">Add {product.name}</h3>
          <p className="mt-2 text-sm text-gray-600">${product.price}</p>
          <button onClick={onBuy} className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      );
};
