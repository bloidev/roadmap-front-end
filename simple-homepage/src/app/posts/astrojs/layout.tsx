import Navbar from "@/app/ui/Navbar";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div style={{ color: 'blue' }}>
        <Navbar />
        <div className="flex flex-row gap-3 justify-center">
            <article className="w-full xl:w-8/12 px-6 border border-red-200">
                {children}
            </article>
        </div>
        <div className="fixed right-0 top-[64px] h-screen bg-slate-800 hidden w-full xl:block xl:w-2/12">
            Tabla de contenido
        </div>
    </div>
  }