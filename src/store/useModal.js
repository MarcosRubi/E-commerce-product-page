import { create } from 'zustand'

const useModal = create((set) => ({
  isActive: false,
  setIsActive: (newValue) =>
    set((state) => {
      return { isActive: newValue }
    })

}))

export default useModal
