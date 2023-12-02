import SliderSm from './SliderSm'
import Thumbnail from './Thumbnail'
import useModal from '../store/useModal'
import useProduct from '../store/useProduct'
import { useEffect, useState } from 'react'

export const IconClose = () => {
  return <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'><path d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z' fill='currentColor' fillRule='evenodd' /></svg>
}

function Modal ({ imagesCarousel, imagesThumbnail }) {
  const { isActive, setIsActive } = useModal()
  const { indexActive } = useProduct()
  const [active, setActive] = useState(indexActive)

  useEffect(() => {
    setActive(indexActive)
  }, [indexActive])

  const changeSelected = (val) => {
    if (val === 'prev') {
      if ((active - 1) < 0) {
        setActive(imagesCarousel.length - 1)
        return
      }
      setActive(active - 1)
      return
    }
    if ((active + 1) >= imagesCarousel.length) {
      setActive(0)
      return
    }
    setActive(active + 1)
  }

  const handleOnClick = (val) => {
    setActive(val)
  }

  return (
    <div className={`modal ${isActive ? 'active' : ''} `}>
      <div className='flex flex-end'>
        <button className='btn' onClick={() => { setIsActive(false) }}>
          <IconClose />
        </button>
      </div>
      <SliderSm images={imagesCarousel} changeSelected={changeSelected} selected={active} />
      <Thumbnail imagesThumbnail={imagesThumbnail} handleOnClick={handleOnClick} selected={active} />
    </div>
  )
}

export default Modal
