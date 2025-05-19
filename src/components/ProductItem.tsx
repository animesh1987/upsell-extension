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
        <div className="p-6 bg-white flex justify-between items-center">
          <div className="flex flex-row">
            <img src={product.images[0].url_thumbnail} alt="Image thumbnail" className="h-20" />
            <div className="flex-col">
              <h4 className="font-semibold text-gray-900 w64">{product.name}</h4>
              <div className="mt-2 text-sm text-gray-600 w14">${product.price}.00</div>
            </div>
          </div>
          <button onClick={onBuy} className="w-30 m-2 items-center rounded-xs bg-neutral-700 px-2 py-2 text-white hover:bg-neutral-600 transition">
            Add to Cart
          </button>
        </div>
      );
};
