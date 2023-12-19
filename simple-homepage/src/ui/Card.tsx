
type CardProps = {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string; 
}

export default function Card(props : CardProps){
    const {title, description, image, github, demo} = props;

    return (
        <div className="border rounded border-slate-300 dark:border-slate-900 bg-slate-200 dark:bg-slate-900">
            <div>
                <img src={image} alt="portfolio" />
            </div>
            <div className="p-5">
                <h4 className="font-bold text-3xl text-slate-800 dark:text-slate-100">{title}</h4>
                <p className="text-slate-800 dark:text-slate-100 py-3">{description}</p>
                <div className="grid grid-cols-2 gap-3">
                    <a href={github} target="_blank" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded text-center">Github</a>
                    <a href={demo} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Vista Previa</a>                
                </div>
            </div>
        </div>
    )
}