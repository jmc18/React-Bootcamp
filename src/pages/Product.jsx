import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useProduct } from '../utils/hooks/useProduct';

//Components
import { Button, Loading, NotFound } from '../components/common';

//Helpers
import numberWithCommas from '../utils/numberWithCommas.js'

const Product = () => {
	const { productId } = useParams()
	const { data, isLoading } = useProduct(productId)

	const [previewImg, setPreviewImg] = useState('')
	const [descriptionExpand, setDescriptionExpand] = useState(false)
	const [productNotFound, setProductNotFound] = useState(false)
	const [productInfo, setProductInfo] = useState(null)
  const [quantity, setQuantity] = useState(1)

	useEffect(() => {
		if (!isLoading && data.results_size > 0) {
			setProductNotFound(true)
			setProductInfo(data.results[0])
      setPreviewImg(data?.results[0]?.data?.mainimage?.url)
      console.log(data.results[0])
		}
	}, [data, isLoading]);

  const updateQuantity = (type) => {
    const stock = productInfo?.data?.stock
    type === 'plus' ? setQuantity(quantity + 1 <= stock ? quantity + 1 : quantity) 
                    : setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
  }

	return (
		<div className="product-details">
			<div className="product-details__images">
				<div className="product-details__images__list">
          {
            productInfo?.data?.images.map((img, index) => (
              <div key={index}
                className="product-details__images__list__item"
                onClick={() => setPreviewImg(img.image.url)}
              >
                <img src={img.image.url} alt={img.image.url} />
              </div>
            ))
          }
					
				</div>
				<div className="product-details__images__main">
					<img src={previewImg} 
              alt={productInfo?.data?.mainimage?.alt} />
				</div>
				<div
					className={`product-description 
                    ${!descriptionExpand ? 'expand' : ''}`}
				>
					<div className="product-description__title">Description</div>
					<div
						className="product-description__content"
						dangerouslySetInnerHTML={{__html: productInfo?.data?.description[0].text}} 
					/>
					<div className="product-description__toggle">
						<Button
							size="sm"
							handler={() => setDescriptionExpand(!descriptionExpand)}
						>
							{descriptionExpand ? 'Less' : 'More'}
						</Button>
					</div>
				</div>
			</div>
      <div className='product-details__info'>
      <h1 className="product-details__info__title">{productInfo?.data?.name}</h1>
          <div className="product-details__info__item">
              <span className="product-details__info__item__price">
                  ${numberWithCommas(productInfo?.data?.price)}
              </span>
          </div>

          <div className="product-details__info__item">
                    <div className="product-details__info__item__title">
                        SKU
                    </div>
                    <div className="product-details__info__item__list">
                    <span className="product-details__info__item__list__item__size">
                        {productInfo?.data?.sku}
                        </span>
                    </div>
                </div>

                <div className="product-details__info__item">
                    <div className="product-details__info__item__title">
                        Category
                    </div>
                    <div className="product-details__info__item__list">
                    <span className="product-details__info__item__list__item__size">
                        {productInfo?.data?.category?.slug}
                        </span>
                    </div>
                </div>

                <div className="product-details__info__item">
                    <div className="product-details__info__item__title">
                        Tags
                    </div>
                    <div className="product-details__info__item__list">
                        {
                            <div className={`product-details__info__item__list__item`}>
                                <span className="product-details__info__item__list__item__size">
                                {productInfo?.tags?.join(', ')}
                                </span>
                            </div>
                        }
                    </div>
                </div>

          <div className="product-details__info__item">
                    <div className="product-details__info__item__title">
                        Quantity
                    </div>
                    <div className="product-details__info__item__quantity">
                        <div className="product-details__info__item__quantity__btn" 
                            onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus" />
                        </div>
                        <div className="product-details__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div className="product-details__info__item__quantity__btn" 
                            onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus" />
                        </div>
                    </div>
                </div>

                <div className="product-details__info__item">
                    <Button>Add To Car</Button>
                </div>

                <div className="product-details__info__item">
                <div className="product-details__info__item__title">
                      Specs
                    </div>
                    <table className='product-details__info__item__specs'>
                      <tbody>
                      {
                        productInfo?.data?.specs?.map((item, index) => (
                          <tr key={index}>
                            <td>{item.spec_name}</td>
                            <td>{item.spec_value}</td>
                          </tr>
                        ))
                      }
                      </tbody>
                    </table>
                </div>

                <div className={`product-description mobile ${!descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Description
                </div>
                <div className="product-description__content" 
                  dangerouslySetInnerHTML={{__html: productInfo?.data?.description[0].text}} />
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Less' : 'More'
                        }
                    </Button>
                </div>
            </div>
      </div>
		</div>
	);
};

export default Product;
