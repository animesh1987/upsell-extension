import axios from "axios";

const getProductUrl = 'https://upsell-worker.animeshsingh1987.workers.dev/getProduct'

export async function getProduct() {
    const product = await axios.get(getProductUrl);

    return product.data.data;
}