import useCart from '../store/useCart'

function CartItem ({ name, UnitPrice, productCount, urlImg, id }) {
  const { removeProductById } = useCart()

  return (
    <li className='cart__item flex items-center justify-between flex-wrap'>
      <div className='cart__item__img'>
        <img
          src={`/images/${urlImg}`}
          alt='Imagen del producto'
        />
      </div>
      <div className='cart__item__info'>
        <p>{name}</p>
        <span>${UnitPrice} x {productCount}</span>
        <span className='font-bold'>${(parseFloat(UnitPrice) * productCount).toFixed(2)}</span>
      </div>
      <div className='cart__item__remove'>
        <button className='btn' onClick={() => removeProductById(id)}>
          <img src='/images/icon-delete.svg' alt='Eliminar dl carrito' />
        </button>
      </div>
    </li>

  )
}

export default CartItem
