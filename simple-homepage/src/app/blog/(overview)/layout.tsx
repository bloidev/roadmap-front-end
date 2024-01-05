import Navbar from "../../ui/Navbar";

const temas = [
    "Javascript",
    "Java",
    "Python",
    "NextJs",
    "Astro.js"
]

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
    <div className="h-screen bg-slate-200 dark:bg-slate-700">
        <Navbar />        
        <div className="flex flex-row justify-center">
        <div className="w-full sm:w-8/12">
            <div className="px-4">
                {children}
            </div>
            {/* <div className="col-span-2 hidden md:block pt-4 pl-4">
                <h4 className="text-3xl font-bold text-slate-700 dark:text-slate-200">Navegación</h4>
                <ul className="flex flex-row flex-wrap gap-2 mt-4">
                    {temas.map((tema) => <li className="bg-green-400 px-2 rounded-full">{tema}</li>)}                    
                </ul>
            </div> */}
        </div>
        </div>
    </div>)
}