import { useEffect } from 'react';
import { getProduct } from '../service';

export function Product() {
    useEffect(() => {
        const fetchProduct = async () => {
            await getProduct();
        }

        fetchProduct();
    }, []);

    return <>This is product</>
}