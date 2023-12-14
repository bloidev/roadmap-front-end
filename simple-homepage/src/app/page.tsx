"use client"
import Header from "@/ui/Header";
import Navbar from "@/ui/Navbar";

export default function Home() {

  return (
    <main className="px-4 sm:px-16 xl:px-36 bg-slate-100 dark:bg-slate-800">
      <Navbar />
      <Header />      
    </main>
  )
}
