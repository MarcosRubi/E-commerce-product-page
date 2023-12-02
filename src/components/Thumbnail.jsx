function Thumbnail ({ imagesThumbnail, selected, handleOnClick }) {
  return (
    <ul className='product__image__thumbnail flex items-center'>
      {
                imagesThumbnail.map((image, index) => {
                  return <li key={index} onClick={() => { handleOnClick(index) }}><img src={`/images/${image}`} alt='Imagen del producto ' className={`${selected === index ? 'selected' : ''}`} /></li>
                })
            }
    </ul>
  )
}

export default Thumbnail
