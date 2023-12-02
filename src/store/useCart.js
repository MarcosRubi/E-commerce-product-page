import { create } from 'zustand'

const useCart = create((set) => ({
  products: [],
  cartActive: false,
  setProducts: (newProduct) =>
    set((state) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.name === newProduct.name
      )

      if (existingProductIndex !== -1) {
        // El producto ya existe, actualiza la cantidad
        const updatedProducts = [...state.products]
        updatedProducts[existingProductIndex].productCount += newProduct.productCount

        return { products: updatedProducts }
      } else {
        // El producto no existe, agrégalo a la lista
        return { products: [...state.products, newProduct] }
      }
    }),
  removeProductById: (productId) =>
    set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),
  setCartActive: (newValue) =>
    set((state) => {
      return { cartActive: newValue }
    })
}))

export default useCart
