import ButtonAdToCart from './ButtonAdToCart'

function CardProduct ({ product }) {
  const priceWithDiscount = (product.UnitPrice - (product.UnitPrice * product.discount / 100)).toFixed(2)

  function StarRating ({ rating }) {
    const stars = Array.from({ length: rating }, (_, index) => (
      <svg
        key={index}
        width={16}
        height={18}
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
    ))

    return <div>{stars}</div>
  }
  return (
    <div className='product__item'>
      <div className='product__image__preview'>

        <a href={`product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
          <img src={`/images/${product.carouselImages[0]}`} alt='product image' className='flex' />
        </a>
      </div>
      <div className='info'>
        <a href={`product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
          <h5>{product.name}</h5>
        </a>
        <div className='flex items-center '>
          <div className='stars flex items-center '>
            <StarRating rating={product.calification} />
            <span className='font-bold'>{product.calification}.0</span>
          </div>
        </div>
        <div className='price font-bold flex items-center justify-between'>
          <span>${priceWithDiscount}</span>
          <ButtonAdToCart productId={product.id} count={1} />
        </div>
      </div>

    </div>
  )
}

export default CardProduct
