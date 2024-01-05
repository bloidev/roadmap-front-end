import Button from "./components/Button";

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col-reverse xl:flex-row xl:flex-wrap justify-center items-center">      
        <div className="w-full xl:w-6/12">
            <h4 className="font-bold uppercase text-slate-500 my-3">😎  Simple way to communicate</h4>
            <h1 className="text-5xl  leading-tight sm:leading-tight xl:leading-snug xl:text-7xl font-bold text-slate-800 dark:text-slate-100 my-3">Actions for Accessibility in Design</h1>
            <p className="font-bold  text-slate-500 my-4">The fastest way to build and deploy websites with resusable components.</p>
            <div className="my-10">
                <Button type="link" href="#" style="bg-blue-600 hover:bg-blue-800 transition-colors text-slate-50 py-3 px-5 rounded-lg m-2">Get Started</Button>
                <Button type="link" href="#" style="text-blue-600 py-3 px-5 rounded-lg m-2 underline font-bold">Get Live Demo</Button>                
            </div>
            <div className="flex flex-row justify-between flex-nowrap my-3">
                <span className="w-2/3 text-base font-bold text-slate-500 flex flex-row">
                    <svg className="fill-green-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"/>
                    </svg>
                    No credit card required
                </span>
                <span className="w-2/3 text-base font-bold text-slate-500 flex flex-row">
                    <svg className="fill-green-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"/>
                    </svg>
                    No software to install
                </span>
            </div>
        </div>        
        <div className="w-full xl:w-6/12">
            <img src="/hero-image-simple-homepage.png" alt="logo" className="w-full mx-auto block" style={{maxWidth:"640px"}}/>
        </div>
    </header>
  );
}
