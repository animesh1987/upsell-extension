import { FC, useState } from 'react';
import { useExtension } from '../context/ExtensionContext';
import { updateCart } from '../service/api/updateCart';

interface ProductItemProp {
  product: {
    name: string;
    id: number;
    price: number;
  }
}

export const ProductItem: FC<ProductItemProp> = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const extension = useExtension();

  const instance = extension.getServiceInstance();

  const addToCart: () => void = async () => {
    setIsAdding(true);
  
    instance.post({
      type: 'EXTENSION:SHOW_LOADING_INDICATOR',
      payload: { show: true },
    });
    try {
      await updateCart(product.id, extension.getCartId());
      
      instance.post({ type: 'EXTENSION:RELOAD_CHECKOUT' });
      instance.post({
        type: 'EXTENSION:SHOW_LOADING_INDICATOR',
        payload: { show: false },
      });

      setIsAdding(true);
      setIsAdded(true);
    } catch (err) {
      console.log(err);
      instance.post({
        type: 'EXTENSION:SHOW_LOADING_INDICATOR',
        payload: { show: false },
      });
      setIsAdding(false);
    }
  }

  const loadingContent = (
    <>
      {/* <svg class="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
        <circle class="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg> */}
      Adding
    </>
  );

  return (
      <div className="p-3 bg-white flex justify-between items-center">
        <div className="flex flex-row">
          <img src={product.images[0].url_thumbnail} alt="Image thumbnail" className="h-20" />
          <div className="flex-col">
            <h4 className="font-medium text-gray-900 w64">{product.name}</h4>
            <div className="mt-2 text-sm text-gray-600 w14">${product.price}.00</div>
          </div>
        </div>
        { isAdded ?
          <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">Added successfully</span> :
          <button
            onClick={addToCart}
            className={`flex-row flex w-30 m-2 justify-center items-center rounded-xs bg-neutral-800 px-2 py-2 text-white hover:bg-neutral-600 transition ${ isAdding ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={isAdding}
          >
            { isAdding ? loadingContent : 'Add to Cart' }
          </button>
        }
      </div>
    );
};
