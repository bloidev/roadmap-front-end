"use client"
import Header from "@/ui/Header";
import Navbar from "@/ui/Navbar";
import Counter from "@/lib/Counter"; 
import { useStore } from "@/lib/Counter"
export default function Home() {

  const count = useStore(state => state.count)

  return (
    <main className="px-4 sm:px-16 xl:px-36 bg-slate-100 dark:bg-slate-800">
      <Navbar />
      <Header />
      {count}
      {/* Aqui iria el footer y lo demás si fuera un sitio real :D */}
    </main>
  )
}
