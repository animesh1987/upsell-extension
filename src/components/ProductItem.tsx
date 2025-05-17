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
        <div>
            {product.name}
            {product.price}

            <button onClick={onBuy}>Buy</button>
        </div>
    );
};
