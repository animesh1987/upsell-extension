import { useEffect, useState } from 'react';
import { getProduct } from '../service';
import { ProductItem } from './ProductItem';
import { ProductLoadingSkeleton } from './ProductLoadingSkeleton';

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
        return <ProductLoadingSkeleton />;
    }

    return products.map(product => <ProductItem key={product.id} product={product} />);
}
