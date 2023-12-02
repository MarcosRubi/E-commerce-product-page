import Carousel from './Carousel'

function SliderSm ({ images, changeSelected, selected }) {
  return (
    <>
      <div className='carousel relative'>
        <button className='btn absolute' onClick={() => { changeSelected('prev') }}>
          <img src='/images/icon-previous.svg' alt='Ver imagen anteior' />
        </button>
        <Carousel images={images} selected={selected} isMobile={false} />
        <button className='btn absolute' onClick={() => { changeSelected('nex') }}>
          <img src='/images/icon-next.svg' alt='Ver siguiente imagen' />
        </button>
      </div>
    </>

  )
}

export default SliderSm
