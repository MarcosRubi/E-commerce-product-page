import { useState, useEffect } from 'react'
import SliderSm from './SliderSm'
import SliderMd from './SliderMd'
import ProductCount from './ProductCount'

import ButtonAdToCart from './ButtonAdToCart'

const HomePageProduct = ({ product }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [count, setCount] = useState(1)
  const priceWithDiscount = (product.UnitPrice - (product.UnitPrice * product.discount / 100)).toFixed(2)
  const [selected, setSelected] = useState(0)

  const changeSelected = (val) => {
    if (val === 'prev') {
      if ((selected - 1) < 0) {
        setSelected(product.carouselImages.length - 1)
        return
      }
      setSelected(selected - 1)
      return
    }
    if ((selected + 1) >= product.carouselImages.length) {
      setSelected(0)
      return
    }
    setSelected(selected + 1)
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main>
      <div className='product container '>
        <div className='product__item flex flex-column-sm'>
          {isMobile
            ? (
              <SliderSm images={product.carouselImages} changeSelected={changeSelected} selected={selected} />
              )
            : (
              <SliderMd imagesCarousel={product.carouselImages} imagesThumbnail={product.carouselThumbnail} id={product.id} />
              )}
          <div className='product__info'>
            <span className='uppercase categorie font-bold'>{product.categorie}</span>
            <h1>{product.name}</h1>
            <p>{product.description} </p>
            <div className='price flex justify-between items-center font-bold'>
              <div className='price__now flex items-center'>
                <span className='price__total'>${priceWithDiscount} </span>
                <span className='price__discount'>{product.discount}%</span>
              </div>
              <div className='price__old'>
                <span>${product.UnitPrice.toFixed(2)}</span>
              </div>
            </div>
            <div className='info_cart flex flex-column-sm'>
              <ProductCount count={count} setCount={setCount} />
              <ButtonAdToCart productId={product.id} count={count} setCount={setCount} />
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default HomePageProduct
