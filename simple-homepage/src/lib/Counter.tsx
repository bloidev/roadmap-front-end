"use client"

import { create } from 'zustand'

type Store = {
  count: number
  inc: () => void
}

const incPersist = () => {
    const count = Number(localStorage.getItem('count') || 0)        
    return count
}

const useStore = create<Store>()((set) => ({
  count: incPersist(),
  inc: () => set((state) => {    
    localStorage.setItem('count', String(state.count + 1))
    return { count: state.count + 1}
  }),
}))

function Counter() {

  const { count, inc } = useStore()

  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}
export { useStore}
export default Counter