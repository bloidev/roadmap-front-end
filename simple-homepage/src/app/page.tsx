"use client";
import Header from "@/app/ui/Header";
import Navbar from "./ui/Navbar";
import Button from "./ui/components/Button";
import Contact from "./ui/form/Contact";
export default function Home() {
  return (
    <main className="bg-slate-100 dark:bg-slate-800">
      <div className="w-full md:w-8/12 mx-auto">
        <Navbar />
        <header className="min-h-screen flex flex-col-reverse xl:flex-row xl:flex-wrap justify-center items-center">
          <div className="w-full xl:w-6/12">
            <h4 className="font-bold uppercase text-slate-500 my-3">
              😎 Portafolio para Devs
            </h4>
            <h1 className="text-5xl  leading-tight sm:leading-tight xl:leading-snug xl:text-7xl font-bold text-slate-800 dark:text-slate-100 my-3">
              Aprender es Gratis
            </h1>
            <p className="font-bold  text-slate-500 my-4">
              La forma más rápida de mejorar es moviendo las manitas.
            </p>
            <div className="my-10">
              <Button
                type="link"
                href="#"
                style="bg-blue-600 hover:bg-blue-800 transition-colors text-slate-50 py-3 px-5 rounded-lg m-2"
              >
                Ver Portafolio
              </Button>
              <Button
                type="link"
                href="#"
                style="text-blue-600 py-3 px-5 rounded-lg m-2 underline font-bold"
              >
                Ver LinkedIn
              </Button>
            </div>
            <div className="">
              <h4 className="font-bold uppercase text-slate-500 my-3">
                😎 Enviame un mensaje
              </h4>
              <Contact />
            </div>
          </div>
          <div className="w-full xl:w-6/12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-purple-700 dark:fill-purple-400"
                d="M32.3,-50C43.2,-49.7,54.2,-43.7,60.8,-34.4C67.4,-25.1,69.6,-12.5,71.2,0.9C72.7,14.4,73.7,28.7,63,30.9C52.3,33.1,29.9,23.1,17.5,21.5C5,19.9,2.5,26.8,-6.3,37.6C-15.1,48.5,-30.1,63.4,-44.3,65.9C-58.4,68.5,-71.7,58.8,-73.6,45.7C-75.6,32.7,-66.3,16.3,-62.9,1.9C-59.6,-12.5,-62.3,-25,-58.7,-35.3C-55.1,-45.5,-45.3,-53.5,-34.5,-53.8C-23.7,-54.1,-11.8,-46.7,-0.6,-45.7C10.7,-44.7,21.5,-50.3,32.3,-50Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </header>
      </div>
    </main>
  );
}
