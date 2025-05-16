const getAddCartUrl = `https://api.bigcommerce.com/stores/${env.STORE_HASH}/v3/channels`;

export function addToCart() {
    console.log(getAddCartUrl);
}