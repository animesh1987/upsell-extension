import axios from "axios";

export async function updateCart(productId: number, cartId: string) {
    const getProductUrl = 'https://upsell-worker.animeshsingh1987.workers.dev/addToCart'

    const cart = await axios.post(getProductUrl, {
        cart_id: cartId,
        line_items: [{
            product_id: productId,
            quantity: 1,
        }],
    });

    console.log(cart);

    return cart.data;
}
