import React from 'react';
import { useExtension } from '../context/ExtensionContext';

interface ProductItemProp {
    product: {
        name: string;
        id: number;
        price: number;
    }
}

export const ProductItem: React.FC<ProductItemProp> = ({ product }) => {
  const extension = useExtension();

  const instance = extension.getServiceInstance();

  console.log(extension.getServiceInstance());

  const onBuy: () => void = () => {
    console.log('firing reload');
    instance.post({ type: 'EXTENSION:RELOAD_CHECKOUT'});
  }

  return (
      <div className="p-3 bg-white flex justify-between items-center">
        <div className="flex flex-row">
          <img src={product.images[0].url_thumbnail} alt="Image thumbnail" className="h-20" />
          <div className="flex-col">
            <h4 className="font-medium text-gray-900 w64">{product.name}</h4>
            <div className="mt-2 text-sm text-gray-600 w14">${product.price}.00</div>
          </div>
        </div>
        <button onClick={onBuy} className="w-30 m-2 items-center rounded-xs bg-neutral-800 px-2 py-2 text-white hover:bg-neutral-600 transition">
          Add to Cart
        </button>
      </div>
    );
};
