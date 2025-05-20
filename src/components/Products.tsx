import { useEffect, useState } from 'react';
import { getProduct } from '../service';
import { ProductItem } from './ProductItem';

export function Product() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchProduct = async () => {
            const data = await getProduct();
            setIsLoading(false);
            setProducts([data]);
        }

        fetchProduct();
    }, []);

    if (isLoading) {
        return <>Loading</>;
    }

    console.log(products, isLoading);

    return products.map(product => <ProductItem key={product.id} product={product} />);
}
