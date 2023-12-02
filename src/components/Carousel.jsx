import React from 'react'
import useModal from '../store/useModal'

function Carousel ({ images, selected, isMobile = true, isModal = false }) {
  const { setIsActive } = useModal()

  return (
    <ul className='carousel__images'>
      {images.map((image, index) => (
        <li
          className={`${selected === index ? 'active' : ''} `}
          key={index}
        >
          <img
            src={`/images/${image}`}
            alt='Imagen del producto'
            {...(isMobile ? { onClick: () => setIsActive(true) } : {})}
          />
        </li>
      ))}
    </ul>
  )
}

export default Carousel
