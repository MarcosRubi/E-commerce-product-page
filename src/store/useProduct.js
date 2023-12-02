import { create } from 'zustand'

const useProduct = create((set) => ({
  indexActive: 0,
  setIndexActive: (newValue) =>
    set((state) => {
      return { indexActive: newValue }
    })

}))

export default useProduct
