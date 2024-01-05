"use client"

import Card from "@/app/ui/Card" 
import GithubIcon from "@/app/ui/components/svg/GithubIcon"
import InstagramIcon from "@/app/ui/components/svg/InstagramIcon"
import LinkedInIcon from "@/app/ui/components/svg/LinkedIn"
import XIcon from "@/app/ui/components/svg/XIcon"

export default function Portfolio(){
    return (      
      <main className="bg-slate-100 dark:bg-slate-800 min-h-screen px-4"> 
        <div className="flex flex-row justify-center">
            <div className="w-full sm:w-10/12">
            <header className="border border-slate-300 dark:border-slate-700 p-10 my-5">
                <h1 className="text-3xl font-bold text-center my-2 text-slate-800 dark:text-green-400">Mark Developer | Fullstack</h1>    
                <p className="text-center my-2 text-slate-800 dark:text-green-400">Mis habilidades Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates.</p> 
                <ul className="w-full sm:w-6/12 mx-auto grid grid-cols-2 sm:grid-cols-4  my-2">
                    <li><a href="#" target="_blank" className="text-slate-800 dark:text-slate-100 flex flex-row"><LinkedInIcon /> LinkedIn</a></li>
                    <li><a href="#" target="_blank" className="text-slate-800 dark:text-slate-100 flex flex-row"><GithubIcon />Github</a></li>
                    <li><a href="#" target="_blank" className="text-slate-800 dark:text-slate-100 flex flex-row"><InstagramIcon />Instagram</a></li>
                    <li><a href="#" target="_blank" className="text-slate-800 dark:text-slate-100 flex flex-row"><XIcon />Twitter X</a></li>
                </ul>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
                <Card 
                    image="/portfolio-image.png"
                    title="Mi Primer Proyecto"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates."
                    github="https://github.com/plcmark2"
                    demo="https://plcmark2.com"
                />
                <Card 
                    image="/portfolio-image.png"
                    title="Mi Primer Proyecto"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates."
                    github="https://github.com/plcmark2"
                    demo="https://plcmark2.com"
                />
                <Card 
                    image="/portfolio-image.png"
                    title="Mi Primer Proyecto"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates."
                    github="https://github.com/plcmark2"
                    demo="https://plcmark2.com"
                />
                <Card 
                    image="/portfolio-image.png"
                    title="Mi Primer Proyecto"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates."
                    github="https://github.com/plcmark2"
                    demo="https://plcmark2.com"
                />
                <Card 
                    image="/portfolio-image.png"
                    title="Mi Primer Proyecto"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates."
                    github="https://github.com/plcmark2"
                    demo="https://plcmark2.com"
                />
            </section> 
            </div>
        </div>       
      </main>
    )
}