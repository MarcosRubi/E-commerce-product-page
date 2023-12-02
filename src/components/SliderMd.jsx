import Thumbnail from './Thumbnail'
import Modal from './Modal'
import Carousel from './Carousel'
import useProduct from '../store/useProduct'

function SliderMd ({ imagesCarousel, imagesThumbnail }) {
  const { indexActive, setIndexActive } = useProduct()

  const handleOnClick = (val) => {
    setIndexActive(val)
  }

  return (
    <>
      <div className='product__image'>
        <div className='product__image__preview'>
          <Carousel images={imagesCarousel} selected={indexActive} />
        </div>
        <Thumbnail imagesThumbnail={imagesThumbnail} handleOnClick={handleOnClick} selected={indexActive} />
      </div>
      <Modal imagesCarousel={imagesCarousel} imagesThumbnail={imagesThumbnail} />
    </>

  )
}

export default SliderMd
