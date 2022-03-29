import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useGeneralRequest } from '../utils/hooks/useGeneralRequest'

//cart Context
import CartContext from '../context/Cart/CartContext'

//Components
import { Button, Loading, NotFound, ProductDetailInfo, ProductDescription, ProductQuantityControl } from '../components/common'

//Helpers
import numberWithCommas from '../utils/numberWithCommas.js'

const Product = () => {
  const cartContext = useContext(CartContext)
  const { productId } = useParams()
  const { data, isLoading } = useGeneralRequest(`&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`)
  const navigate = useNavigate()

  const [previewImg, setPreviewImg] = useState('')
  const [productNotFound, setProductNotFound] = useState(false)
  const [productInfo, setProductInfo] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!isLoading && data.results_size > 0) {
      setProductNotFound(true)
      setProductInfo(data.results[0])
      setPreviewImg(data?.results[0]?.data?.mainimage?.url)
    }
  }, [data, isLoading])

  const updateQuantity = (type) => {
    const stock = productInfo?.data?.stock
    type === 'plus' ? setQuantity(quantity + 1 <= stock ? quantity + 1 : quantity) : setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }

  const addProductToCart = () => {
    const productData = {
      productId: productId,
      mainImage: productInfo?.data?.mainimage?.url,
      productName: productInfo?.data?.name,
      unitPrice: productInfo?.data?.price,
      quantity: quantity,
      stock: productInfo?.data?.stock
    }
    cartContext.addProduct(productData)
  }

  const handleNavigate = (url) => {
    navigate(url)
  }

  if (isLoading) {
    return <Loading text="Loading product data..." />
  }

  return !productNotFound ? (
    <NotFound text="Product Not Found" />
  ) : (
    <div className="product-details">
      <div className="product-details__images">
        <div className="product-details__images__list">
          {productInfo?.data?.images.map((img, index) => (
            <div key={index} className="product-details__images__list__item" onClick={() => setPreviewImg(img.image.url)}>
              <img src={img.image.url} alt={img.image.url} />
            </div>
          ))}
        </div>
        <div className="product-details__images__main">
          <img src={previewImg} alt={productInfo?.data?.mainimage?.alt} />
        </div>
        <ProductDescription isMobile={false} title="Description" info={productInfo?.data?.description[0].text} />
      </div>
      <div className="product-details__info">
        <h1 className="product-details__info__title">{productInfo?.data?.name}</h1>

        <ProductDetailInfo info={numberWithCommas(productInfo?.data?.price)} />
        <ProductDetailInfo title="SKU" info={numberWithCommas(productInfo?.data?.sku)} />
        <ProductDetailInfo title="Category" info={productInfo?.data?.category?.slug} />
        <ProductDetailInfo title="Tags" info={productInfo?.tags?.join(', ')} />

        {cartContext.state.items.filter((e) => e.productId === productId).length === 0 && (
          <ProductQuantityControl title="Quantity" quantity={quantity} updateQuantity={updateQuantity} />
        )}

        <div className="product-details__info__item">
          <Button
            icon="bx bx-cart"
            animate={true}
            handler={() =>
              cartContext.state.items.filter((e) => e.productId === productId).length === 0 ? addProductToCart() : handleNavigate('/cart')
            }
          >
            Add To Car
          </Button>
        </div>

        <div className="product-details__info__item">
          <div className="product-details__info__item__title">Specs</div>
          <table className="product-details__info__item__specs">
            <tbody>
              {productInfo?.data?.specs?.map((item, index) => (
                <tr key={index}>
                  <td>{item.spec_name}</td>
                  <td>{item.spec_value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ProductDescription isMobile={true} title="Description" info={productInfo?.data?.description[0].text} />
      </div>
    </div>
  )
}

export default Product
