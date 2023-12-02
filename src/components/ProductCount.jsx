function ProductCount ({ count, setCount }) {
  const updateCount = (val) => {
    if (val === 'less') {
      if ((count - 1) > 0) {
        setCount(count - 1)
        return
      }
      return
    }
    setCount(count + 1)
  }
  const updateManualCount = (val) => {
    if (val < 0) {
      setCount(1)
      return
    }
    setCount(val)
  }

  return (
    <div className='product__count flex items-center justify-between'>
      <button className='btn' onClick={() => updateCount('less')}>
        <img src='/images/icon-minus.svg' alt='Quitar uno del carrito' />
      </button>
      <input className='font-bold' type='number' name='txtCount' value={count} onChange={(e) => { updateManualCount(parseInt(e.target.value)) }} />
      <button className='btn' onClick={() => updateCount('more')}>
        <img src='/images/icon-plus.svg' alt='Agregar uno más al carrito' />
      </button>
    </div>
  )
}

export default ProductCount
