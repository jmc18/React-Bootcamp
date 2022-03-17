import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProduct(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [product, setProduct] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProduct() {
      try {
        setProduct({ data: {}, isLoading: true });

        //const uriEncode = encodeURIComponent(`[[:d+=+at(document.id,+"${productId}")+]]`)
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef.trim()}
&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProduct({ data, isLoading: false });
      } catch (err) {
        setProduct({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProduct(productId);

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);

  return product;
}