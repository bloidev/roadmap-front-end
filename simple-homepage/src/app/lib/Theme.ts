"use client"

import { create } from 'zustand' //npm install zustand

type Store = {
    theme: string
    setTheme: (theme : "light" | "dark") => void
}
 
const useTheme = create<Store>((set) => ({
    theme: "light",
    setTheme: (theme : "light" | "dark") => set((state) => {        
        const _ct = state.theme == "light" ? "dark" : "light"        
        localStorage.setItem('theme', _ct) 
        document.body.classList.toggle("dark") 
        return {...state, theme: _ct}
    })
}))

export {useTheme}