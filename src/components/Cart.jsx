/* eslint-disable react/jsx-indent */
import CartItem from './CartItem.jsx'
import useCart from '../store/useCart.js'

function Cart () {
  const { products, cartActive, setCartActive } = useCart()

  return (
    <>
      <a href='#' className='cart relative' onClick={() => setCartActive(!cartActive)}>
        <span className='badge absolute'>{products.length} </span>
        <img src='/images/icon-cart.svg' alt='Ver el carrito' />
      </a>
      <div className={`cart__details absolute ${cartActive ? 'active' : ''}`}>
        <p className='font-bold'>Cart</p>
        <hr />
        {
          products.length > 0
            ? <>
              <ul>
                {
                  products.map((product) => {
                    return (
                      <CartItem
                        key={product.id}
                        id={product.id}
                        urlImg={product.urlImg}
                        name={product.name}
                        UnitPrice={product.UnitPrice}
                        productCount={product.productCount}
                      />
                    )
                  })
                }
              </ul>
              <a href='#' className='btn btn-primary font-bold'>Checkout</a>
              </>
            : <div className='empty'><p className='font-bold'>You cart is empty.</p></div>
        }
      </div>
    </>
  )
}

export default Cart
