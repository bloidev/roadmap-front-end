
export default function Navbar(){
    return (
        <nav className="flex flex-row justify-between items-center h-16 bg-slate-100 dark:bg-slate-800">
            <img src="/alarado-icon-homepage.svg" alt="logo" width="150"/>
            <ul className="hidden sm:flex sm:flex-row sm:space-x-4 sm:items-center">
                <li className="font-bold text-slate-600">About us</li>
                <li className="font-bold text-slate-600">Product</li>
                <li className="font-bold text-slate-600">Resource</li>
                <li className="font-bold text-slate-600">Contact</li>
            </ul>
            <label className="switch hidden sm:block">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </nav>
    )
}